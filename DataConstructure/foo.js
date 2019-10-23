var lengthOfLongestSubstring = function (s) {
  let res = ''
  for (let j = 0; j < s.length; j++) {
    let str = s.slice(j)
    let temp = '';
    for (let i = 0; i < str.length; i++) {
      if (temp.indexOf(str[i]) === -1) {
        temp += str[i]
      } else {
        break;
      }
    }
    if (temp.length > res.length) {
      res = temp
    }
  }
  return res.length;
};

// console.log(lengthOfLongestSubstring('asdddfgghhjkl'))

// let a = 1
// function fnMaker(fn){
//   let a = 0
//   fn()
// }
// let fa = fnMaker(function(){
//   console.log(a)
// })
// let a = 1
// function fnMaker(){
//   let a = 0
//   return function (fn){
//     fn(a)
//   }
// }
// let fa = fnMaker()
// fa(console.log)

function sumArray(array,acc){
  if(array.length === 0){
    return acc
  }
  let shifted = array.shift()
  return sumArray(array,acc+shifted)
}
console.log(sumArray([1,2,3],1))



// var a = {
//   name:'sb'
// }
// var b = {
//   name:'sx'
// }
// var c = [a,b]
// var d = c.slice()
// d.push(1)
// d[0].name = 'xr'
// console.log(d)
// console.log(c)










