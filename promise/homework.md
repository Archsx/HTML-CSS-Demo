## promise的一个问题的解答

### 问题是这样的：

> 下面四个使用 promise 的语句之间的不同点在哪儿(假设 doSomething() 和 doSomethingElse() 返回一个 promise 对象)
  ```
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
```

- 先说点题外话  
  首先我想说自己刚开始学习promise时的疑惑，我始终搞不懂像这样的promise的代码到底是怎么执行的，只是模模糊糊的认为resolve之后调用then方法里面的函数  

  例子：
  ```
    new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("foo")
        },2000)
    })
        .then(function(value){
            console.log(value)
        })

    console.log("bar")

  ```
  当然，结果是先输出bar再输出foo，上面的promise两秒后resolve.
#### 我是想直接看第三种情况
```
  doSomething().then(doSomethingElse())
  .then(finalHandler);
```
这样的写法很容易使人困惑，通常then函数的参数是一个函数，但是上面那种情况呢？这个doSomethingElse什么时候执行呢？这时候就暴露了那个问题，这段代码是怎么执行的？

从最开始的那个例子讲起，我们在new了一个promise之后，给定时器函数传了一个回调函数(就是那个两秒后要resolve promise的匿名函数),然后then方法里面的那个函数(那个function(value){console.log(value）}
  