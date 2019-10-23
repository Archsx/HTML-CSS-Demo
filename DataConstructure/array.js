import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from "constants";

function arrTest(){
  var arr = []
  console.time('with push')
  for(let i = 0 ;i < 1000000;i++){
    arr.push(i)
  }
  console.timeEnd('with push')
  var arrA = new Array(1000000)
  console.time('with =')
  for(let j = 0 ;j < 1000000;j++){
    arrA[j] = j
  }
  console.timeEnd('with =')
}
arrTest()



var array = new Array(10)
for(var i = 0;i < array.length;i++){
  array[i] = i
}
// array = array.map(function(ele,index){
//  return ele = index
// })这样写达不到想要的效果，所以还是用上面那种写法
for(let i = array.length;i>=0;i--){
  array[i] = array[i-1]
  // console.log(i)
  // console.log(array.length)
}
console.log(array.length)//11













