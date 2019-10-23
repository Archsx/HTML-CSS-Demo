









function fPromise(executor) {
  var self = this

  self.status = 'pending'
  self.onResolvedCallback = []
  self.onRejectedCallback = []

  function resolve(value) {
    if (value instanceof fPromise) {
      return value.then(resolve, reject)
    }
    setTimeout(function() { // 异步执行所有的回调函数
      if (self.status === 'pending') {
        self.status = 'resolved'
        self.data = value
        for (var i = 0; i < self.onResolvedCallback.length; i++) {
          self.onResolvedCallback[i](value)
        }
      }
    })
  }

  function reject(reason) {
    setTimeout(function() { // 异步执行所有的回调函数
      if (self.status === 'pending') {
        self.status = 'rejected'
        self.data = reason
        for (var i = 0; i < self.onRejectedCallback.length; i++) {
          self.onRejectedCallback[i](reason)
        }
      }
    })
  }

  try {
    executor(resolve, reject)
  } catch (reason) {
    reject(reason)
  }
}

function resolvefPromise(fPromise2, x, resolve, reject) {
  var then
  var thenCalledOrThrow = false

  if (fPromise2 === x) {
    return reject(new TypeError('Chaining cycle detected for fPromise!'))
  }

  if (x instanceof fPromise) {
    if (x.status === 'pending') { //because x could resolved by a fPromise Object
      x.then(function(v) {
        resolvefPromise(fPromise2, v, resolve, reject)
      }, reject)
    } else { //but if it is resolved, it will never resolved by a fPromise Object but a static value;
      x.then(resolve, reject)
    }
    return
  }

  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      then = x.then //because x.then could be a getter
      if (typeof then === 'function') {
        then.call(x, function rs(y) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return resolvefPromise(fPromise2, y, resolve, reject)
        }, function rj(r) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (thenCalledOrThrow) return
      thenCalledOrThrow = true
      return reject(e)
    }
  } else {
    resolve(x)
  }
}

fPromise.prototype.then = function(onResolved, onRejected) {
  var self = this
  var fPromise2
  onResolved = typeof onResolved === 'function' ? onResolved : function(v) {
    return v
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function(r) {
    throw r
  }

  if (self.status === 'resolved') {
    return fPromise2 = new fPromise(function(resolve, reject) {
      setTimeout(function() { // 异步执行onResolved
        try {
          var x = onResolved(self.data)
          resolvefPromise(fPromise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    })
  }

  if (self.status === 'rejected') {
    return fPromise2 = new fPromise(function(resolve, reject) {
      setTimeout(function() { // 异步执行onRejected
        try {
          var x = onRejected(self.data)
          resolvefPromise(fPromise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    })
  }

  if (self.status === 'pending') {
    // 这里之所以没有异步执行，是因为这些函数必然会被resolve或reject调用，而resolve或reject函数里的内容已是异步执行，构造函数里的定义
    return fPromise2 = new fPromise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(value)
          resolvefPromise(fPromise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })

      self.onRejectedCallback.push(function(reason) {
          try {
            var x = onRejected(reason)
            resolvefPromise(fPromise2, x, resolve, reject)
          } catch (r) {
            reject(r)
          }
        })
    })
  }
}

fPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}

fPromise.deferred = fPromise.defer = function() {
  var dfd = {}
  dfd.fPromise = new fPromise(function(resolve, reject) {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}








var f = new fPromise(function(resolve,reject){
    resolve(5)
})
f.then(function(value){
    console.log(value)
},function(){

})
console.log("start")


function resolvePromise(promise2,x,resolve,reject){
  var then;
  var thenCalledOrThrow = false;



  if(promise2 === x){
    return reject(new TypeError('Chaining cycle detected for promise'))

  }
  if(x instanceof Promise){
    if(x.status === "pending"){
      x.then(function(value){
        resolvePromise(promise2,value,resolve,reject)
      },reject)
    }else{
      x.then(resolve,reject)
    }
    return;
  }

  if((x !== null)&&((typeof x === 'object') || (typeof x === 'function'))){
    
  }


















}














