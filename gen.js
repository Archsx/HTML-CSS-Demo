// function foo() {
//     setTimeout(function () {
//         return 1;
//     })
// }

// function* gen() {
//     var x = yield foo();
//     x++;
//     return x;
// }

// var iter = gen();
// console.log(iter.next()) //value: undefined done: false 这里需要注意，generator函数虽然说是可以暂停，但不是说就一直暂停在这里等foo函数内部的匿名函数执行完，所以这里的x为undefined(因为执行foo()之后返回的就是undefined,虽然foo函数内部没写返回什么，默认返回undefined啦)
// console.log(iter.next(2)) //value: NaN done: true






// function async(n,cb){

// }
// async(5,function(res){
//     console.log(res)
// })










// var fetch = require('node-fetch')
// function* gen(){
//     var url = 'https://api.github.com/users/github';
//     var result = yield fetch(url)//特点看起来很像同步
//     console.log(result.bio)
// }

// var g = gen();
// var result = g.next()//fetch模块返回的是一个promise对象，大概这里的result为{value:somepromise,done:false}

// result.value.then(function(data){//这里利用promise的性质使得当异步操作进行完毕之后才进行后面的处理。避免了上面出现的undefined的情况
//     return data.json();
// }).then(function(data){
//     g.next(data)
// })















































// var thunk = function(filename){
//     return function(cb){
//       return  fs.readFile(filename,cb);
//     }
// }//其实这个就类似于函数的柯里化，利用闭包将多参数函数转化为单参数函数。我不理解为什么会有这样的处理，毕竟最后的结果都是fs.readFile，感觉多此一举

// var readFileThunk = thunk(filename);
// readFileThunk(callback)





// var Thunk = function(fn){
//     return function(){
//         var args = Array.prototype.slice.call(arguments);
//         return function(callback){
//             args.push(callback);
//             return fn.apply(this,args)
//         }
//     }
// }





var thunkify = function(fn){
    return function(){
        var args = Array.prototype.slice.call(arguments)
        return function(cb){
            var called = false;
            args.push(function(){
                if(called){
                    return;
                }
                called = true;
                cb.apply(null, arguments);//这一句最难，注意这个arguments是传入这个匿名函数的参数,也就是sum;
            })
           return  fn.apply(this,args)
        }
    }
}
//此时args = [1,2,function(){if (called){ return;} called = true; cb.apply(null,arguments)}]注意此时的callback不是最先的console.log了，而是被包裹了

function f(a, b, callback){
  var sum = a + b;
  callback(sum);
  callback(sum);
}

var foo = thunkify(f)
foo(1,2)(console.log)//需要注意的是，其实本质上都是在执行原来的函数f，我们这样改写f只是换了一种形式（上面的Thunk函数以及thunkify函数的最后一句都是fn.apply(this,args),这里的args其实就是原来的写法里面的a,b,callback,只是thunkify对callback进行了一层包裹，使回调函数callback只执行了一次）














