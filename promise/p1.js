var promise = getAsyncPromise("fileA.txt");//我现在还不知道如何把一个普通的回调函数风格的函数变成promise风格的
promise.then(function(result){
    //..
}).catch(function(error){
    //..
})


var promise = new Promise(function(resolve,reject){
})

promise.then(onFullfilled,onRejected)
//promise.then(undefined,onRejected)
//promise.catch(onRejected)现在还不太清楚链式调用时这个错误处理到底是怎么回事的


function asyncFunction(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Async Hello World")
        },16)
    })
}
asyncFunction().then(function(value){
    console.log(value)  
},function(error){
    console.log(error)
})


asyncFunction().then(function(value){
    console.log(value)
}).catch(function(error){
    console.log(error)
})




function getURL(url){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            resolve(xhr.responseText)
        }
        xhr.onerror = function(){
            reject(new Error(xhr.statusText))
        }
        xhr.open("GET",url);
        xhr.send()
    })
}
getURL("http://httpbin.org/get").then(function(){

}).catch(function(err){
    console.log(err)
})




function ajax(url){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        let res = xhr.responseText;
        var xhr1 = new XMLHttpRequest()
        xhr1.onload = function(){
            let res1 = xhr1.responseText
        }
        xhr1.open("GET",url+res)
        xhr1.send()
    }
    xhr.open("GET",url)
    xhr.send()
}


Promise.resolve(42)
new Promise(function(resolve){
    resolve(42)
})

var promise = Promise.resolve($.ajax('/json/comment.json'));//将thenable对象转换成promise对象
promise.then(function(value){
    console.log(value)
})





Promise.reject(new Error("boom!")).catch(function(error){
    console.log(error)
})


var promise = new Promise(function(resolve,reject){
    console.log("oops");
    resolve(24)
})
promise.then(function(param){
    console.log(param)
})
console.log("begin")



function onReady(fn){
    var readyState = document.readyState;
    if(readyState === "interactive" || readyState === 'complete'){
        setTimeout(fn,0)
    }else{
        window.addEventListener("DOMContentLoaded",fn);
    }
}

onReady(function(){
    console.log('DOM fully loaded and parsed')
})
console.log('==Starting==')

var readyState = "sb"
// function onReady(fn){
//     return new Promise(function(resolve,reject){
//         if(readyState === "interactive" || readyState === "complete"){
//             resolve(fn)
//         }else{
//             reject(fn)
//         }
//     })
// }
// onReady(function(){
//     console.log("DOM fully loaded and parsed")
// }).then(function(f){
//     // console.log(f)
//     // f()
// }).catch(function(f){
//     // console.log(f)
//     f()
// })


function onReadyPromise() {
    return new Promise(function (resolve, reject) {
        var readyState = document.readyState;
        if (readyState === 'interactive' || readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('DOMContentLoaded', resolve);//这样的形式是否让你想到了那个ajax里面的onload那种的？
        }
    });
}
onReadyPromise().then(function () {//注意这里我们只是想让这个函数异步的执行，所以并不需要考虑错误的情况（这个不算是错误，所以上面的函数也没有reject），
    console.log('DOM fully loaded and parsed');//这里还需要注意的是，不一定非要用resolve的值来传递参数，要灵活一点，这里知识想要执行一个函数。
});
console.log('==Starting==');


function taskA(){
    console.log('Task A')
}
function taskB(){
    console.log('Task B')
}
function onRejected(error){
    console.log("Catch Error: A or B",error)
}
function finalTask(){
    console.log("Final Task")
}
Promise.resolve().then(taskA)
                 .then(taskB)   
                 .catch(onRejected)  
                 .then(finalTask) 


function doubleUp(value){
    return value*2;
}
function increment(value){
    // throw new Error('Boom')
    return value + 1;
}
function output(value){
    console.log(value)
}
Promise.resolve(1).then(increment)
                  .then(doubleUp) 
                  .then(output)
                  .catch(function(e){
                      console.log(e)
                  }) 