/**
 * 这是MDN上的...（三个点）叫扩展语法的东西，这里只截取了一部分
 */


// 展开数组字面量

var parts = ['shoulders','kneess']
var lyrics = ['head',...parts,'and','toes']
console.log(lyrics) //[ 'head', 'shoulders', 'kneess', 'and', 'toes' ]



var arr1 = [0,1,2]
var arr2 = [3,4,5]
// arr1 = arr1.concat(arr2) 
arr1 = [...arr1,...arr2]
console.log(arr1)//[ 0, 1, 2, 3, 4, 5 ]




var arr1 = [0,1,2]
var arr2 = [3,4,5]
// Array.prototype.unshift.apply(arr1,arr2)
arr1 = [...arr2,...arr1]
console.log(arr1)//[ 3, 4, 5, 0, 1, 2 ]


var obj1 = {
  foo:'bar',
  x:42
}
var obj2 = {
  foo:'baz',
  y:13
}
var cloneObj = {...obj1}
console.log(cloneObj) //{ foo: 'bar', x: 42 }

var mergeObj = {...obj1,...obj2}
console.log(mergeObj) //{ foo: 'baz', x: 42, y: 13 }

let me = "sx"
let obj = {
  "foo":12
}
let oo = {me,...obj}
console.log(oo) //{ me: 'sx', foo: 12 }