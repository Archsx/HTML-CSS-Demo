// function foo(){
//     setTimeout(()=>{console.log(this.a)},3000)
// }
// var obj = {
//     a:12
// }

// foo.call(obj)

// function foo(){
//     return (a)=>{
//         console.log(this.a)
//     }
// }
// function foo(){
//     return ()=>{
//         setTimeout(function(){
//             console.log(this.a)
//         },1000)
//     }
// }
// function foo(){
//     return ()=>{
//         setTimeout(()=>{
//             console.log(this.a)
//         },3000)
//     }
// }
// var bar1 = {
//     a:12
// }

// var bar2 = {
//     a:24
// }
// var a = "oops"
// var baz = foo.call(bar1)
// baz.call(bar2);



// var str = "sb"
// console.log(str.length)

function* foo(str){
    
    // Array.prototype.forEach.call(str,function(v){
    //     yield v;
    // })
    for(var i = 0;i < str.length;i++){
        yield str[i]
    }
}
// function bar(iter,init,num){
//     let result = iter.next()
//     while(!result.done){
//         init += result.value;
//         if(init.length%num == 0){
//             init += ' '
//         }
//         result = iter.next()
//     }
//     return init;
// }
function bar(iter){
    for(let item of iter ){
        console.log(item)
    }
}
bar(foo('18322259817'))
// console.log(bar(foo("18322259817"),'',3))