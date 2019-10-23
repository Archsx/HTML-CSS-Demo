var next=(function (){ 
    var promise=Promise.resolve(); 
    return function(url){ 
        promise=promise.then(()=>{ 
            return new Promise(
                (reslove)=>{ $.ajax({
                     url,
                     success(res){
                          $('input').val(res);
                           reslove(); 
                        } 
                    }); 
                }); 
            }); 
        } 
    })(); 
    $('.but1').click(()=>{ next('url1'); }); 
    $('.but1').click(()=>{ next('url2'); });
    $('.but3').click(()=>{ next('url3'); });








    Promise.resolve = function(value){
        if(value instanceof this){
            return value;
        }
        return new Promise(function(resolve){
            resolve(value)
        })
    }

function Promise(executor){
    var self = this;
    self.status = "pending";
    self.data = undefined;
    self.onResolvedCallback = [];
    self.onRejectCallback = [];
    function resolve(value){
        if(self.status === 'pending'){
            self.status = "resolved"
            self.data = value;
            for(var i = 0;i < self.onResolvedCallback.length;i++){
                self.onRejectCallback[i](value)
            }
        }
    }
    function reject(reason){
        if(self.status === "pending"){
            self.status = "reject"
            self.data = reason;
            for(var i = 0; i < self.onRejectCallback.length;i++){
                self.onRejectCallback[i](reason)
            }
        }
    }

    try{
       executor(resolve,reject) 
    }catch(e){
        reject(e)
    }    
}

Promise.prototype.then = function(onResolved,onRejected){
    var self = this;
    var promise2;

    onResolved = typeof onResolved === 'function'? onResolved:function(){}
    onRejected = typeof onRejected === 'function'? onRejected:function(){}

    if(self.status === "resolved"){
        return promise2 = new Promise(function(resolve,reject){
            try{
                var x = onResolved(self.data)
                if(x instanceof Promise){
                    x.then(resolve,reject)
                }
                resolve(x)
            }catch(e){
                reject(e)
            }
        })
    }
    if(self.status === 'rejected'){
        return Promise2 = new Promise(function(resolve,reject){
            try{
                var x = onRejected(self.data)
                if(x instanceof Promise){
                    x.then(resolve,reject)
                }
            }catch(e){
                reject(e)
            }
        })
    }
    if(self.status === 'pending'){
        self.onResolvedCallback.push(function(value){
            try{
                var x = onResolved(self.data)
                if(x instanceof Promise){
                    x.then(resolve,reject)
                }
            }catch(e){
                reject(e)
            }
        })



    }


}
   





/*
resolvePromise函数即为根据x的值来决定promise2的状态的函数
也即标准中的[Promise Resolution Procedure](https://promisesaplus.com/#point-47)
x为`promise2 = promise1.then(onResolved, onRejected)`里`onResolved/onRejected`的返回值
`resolve`和`reject`实际上是`promise2`的`executor`的两个实参，因为很难挂在其它的地方，所以一并传进来。
相信各位一定可以对照标准把标准转换成代码，这里就只标出代码在标准中对应的位置，只在必要的地方做一些解释
*/
function resolvePromise(promise2, x, resolve, reject) {
  var then
  var thenCalledOrThrow = false

  if (promise2 === x) { // 对应标准2.3.1节
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }

  if (x instanceof Promise) { // 对应标准2.3.2节
    // 如果x的状态还没有确定，那么它是有可能被一个thenable决定最终状态和值的
    // 所以这里需要做一下处理，而不能一概的以为它会被一个“正常”的值resolve
    if (x.status === 'pending') {
      x.then(function(value) {
        resolvePromise(promise2, value, resolve, reject)
      }, reject)
    } else { // 但如果这个Promise的状态已经确定了，那么它肯定有一个“正常”的值，而不是一个thenable，所以这里直接取它的状态
      x.then(resolve, reject)
    }
    return
  }

  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) { // 2.3.3
    try {

      // 2.3.3.1 因为x.then有可能是一个getter，这种情况下多次读取就有可能产生副作用
      // 即要判断它的类型，又要调用它，这就是两次读取
      then = x.then 
      if (typeof then === 'function') { // 2.3.3.3
        then.call(x, function rs(y) { // 2.3.3.3.1
          if (thenCalledOrThrow) return // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
          thenCalledOrThrow = true
          return resolvePromise(promise2, y, resolve, reject) // 2.3.3.3.1
        }, function rj(r) { // 2.3.3.3.2
          if (thenCalledOrThrow) return // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
          thenCalledOrThrow = true
          return reject(r)
        })
      } else { // 2.3.3.4
        resolve(x)
      }
    } catch (e) { // 2.3.3.2
      if (thenCalledOrThrow) return // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
      thenCalledOrThrow = true
      return reject(e)
    }
  } else { // 2.3.4
    resolve(x)
  }
}