// console.log("start")
// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("hello")
//     },3000)
// })
//     .then((value)=>{
//         console.log(value)
//         return new Promise((resolve)=>{
//             resolve("world")
//     })
//     })
//     .then((value)=>{
//         console.log(value)
//     })


// console.log("start")
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("oops")
//     },1000)
// })
//     .then(function(value){
//         console.log(value)
//         return new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 resolve('hello')
//             },1500)
//         })
//         .then(function(value){
//             console.log(value)
//             return new Promise(function(resolve,reject){
//                 setTimeout(function(){
//                     resolve("world")
//                 },500)
//             })
//         })
//     })
//     .then(function(value){
//         console.log(value)
//     })




new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("start")
        resolve("oops")},1000)
})
    .then(function(value){
        (function(){
            return new Promise((resolve,reject)=>{
                setTimeout(function(){
                    console.log("wowowwowowowow")
                    resolve("wowowowowowowo")
                },2000)
            })
        })();
        return "hello"
    })

    .then(value=>{
        setTimeout(function() {
        console.log(value)
        }, 2000);
    })






doSomething().then(function () {
  return doSomethingElse();
}).then(finalHandler);

doSomething().then(function () {
  doSomethingElse();
}).then(finalHandler);

doSomething().then(doSomethingElse())
  .then(finalHandler);

doSomething().then(doSomethingElse)
  .then(finalHandler);





你可能会觉得是因为setTimeout函数，但是如果我改成这样：
  ```
    new Promise(function(resolve,reject){
        resolve("foo")
    })
        .then(function(value){
            console.log(value)
        })

    console.log("bar")
  ```
可是这样的结果还是先输出bar再输出foo，当然这不是本文的重点.

