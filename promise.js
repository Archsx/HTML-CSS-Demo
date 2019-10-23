function ajax(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(this.responseText);
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.send();
  });
}

// ajax("/echo/json")
//   .then(function(result) {
//     // Code depending on result
//   })
//   .catch(function() {
//     // An error occurred
//   });





//   function ajax(url) {
//     return new Promise(function(resolve,reject){
//         var xhr = new XMLHttpRequest();
//         xhr.onload = function(){
//             resolve(xhr.responseText)
//         }
//         xhr.open("GET",url);
//         xhr.send();
//     })
//   }
//  ajax('/echo/json').then(function(result){

//  }).catch(function(){

//  })


function foo(){
    setTimeout(function(){
        return 1;//这里需要注意，我们是无法拿到这个返回值1的（下面b的值是undefined）
                 //因为setTimeout里面的这个匿名函数的执行要等到同步代码执行完之后才开始。
                 //异步函数的回调函数往往是不需要return值的，常常是直接对结果进行处理。
                 //或者像下面的函数那样，声明一个全局的变量a，然后在回调里面对a进行修改，
                 //这样似乎可以模拟传递数据，但是实际上同步的代码依然无法使用到这个结果，如下面的console.log(a)为1
                 //毕竟这回调函数要在同步代码执行完成之后才会执行，事件轮循大概就是这个意思吧。
                 //这样的操作我只在<<你不知道的JavaScript中卷>>p152页看到过，用于"gate"。

    },1000)
}
var b = foo();
console.log(b)//undefined











var a = 1;
function foo1(){
    setTimeout(function(){
        a = "oops";
        console.log(a)//'oops'
    },1000)

}
foo1()
console.log(a)//1