//var a = new Array(1,2,3);
//console.log(a)



/*var a = [1,2,3]
var b = a;
console.log(a);
console.log(b);

b = [4,5,6]
console.log(a);
console.log(b);



var c = [7,8,9];
var d = c;
d.push(5);
console.log(c)
console.log(d)

var e = c.slice();
console.log(e)
e.push(123456789);
console.log(c);
console.log(e);
*/


function foo(array){
   array.push(6);
   console.log(array);

    array.length = 0;
    array.push(1,2,3,4)
    console.log(array)

}
var seven = [4,3,9];
foo(seven);
console.log(seven)




str = "hello world"
console.log(str.indexOf('l'))
var arr = [1,3,5,7,9]
console.log(arr.indexOf(7))
var obj = {
    12:"wtf",
    name:"sb",
    age:17,
    sex:"male"
}
console.log(Array.prototype.indexOf.call(obj,"12"))        

function sb(){

}


function bind(fn,obj){
    return function(){
        let args = Array.prototype.slice.call(arguments,1)
        return fn.apply(obj,args)
    }
}

function count(start,end){
    console.log(start)
    var timer = setInterval(function(){
        console.log(++start)
        if(start == end){
            clearInterval(timer)
        }
    },100)
    return {
        cancel:function(){
            clearInterval(timer)
        }
    }
}
function getElementsInArray(arr,n){
    var result = [];
    var count = arr.length;
    var length = result.length;
    var index;
    while(length < n){
       index = parseInt(Math.random()*1000)%count
       if(!result[index]){
           result[index] = arr[index]
       }
    }
    return result;
}
var arr = [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(getElementsInArray(arr,5))







