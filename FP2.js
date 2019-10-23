var concat = function (array) {
    return array.reduce(function (pre, cur) {
        return pre + cur
    })
}

var arr = ["1", "2"]
// console.log(concat(arr))//12

var addThenConcat = function (array, inc) {
    return array.map(function (ele) {
        return parseInt(ele) + inc + '';
    }).reduce(function (pre, cur) {
        return pre + cur;
    })
}

console.log(addThenConcat(arr, 2))


// var mutiple = function(array,inc){
//     return array.map(function(ele){
//         return (+ele) * inc +''
//     }).reduce(function(pre,cur){
//         return pre + cur
//     })
// }
// console.log(mutiple(arr,2))




// var multiple = function(a, b){
//   return +a*b + ''
// }
// var concatArray = function(chars, inc){
//   return chars.map(function(char){
//     return multiple(char, inc);
//   }).reduce(function(a,b){
//       return a.concat(b)
//   });
// }
// console.log(concatArray(['1','2','3'], 2)) // => '246'

// var multiple = function(a,b){
//     return (+a) *b +''
// }
// var concatArray = function(array,inc){
//     return array.map(function(ele){
//         return multiple(ele,inc)
//     }).reduce(function(pre,cur){
//         return pre + cur;
//     })
// }

// console.log(concatArray(["2","3","5"],2))





var multiple = function (a) {
    return function (b) {
        return (+b) * a + ''
    }
}
var plus = function (a) {
      return function (b) {
        return (+b) + a + "";
    }
}

var concatArray = function(array,stylishChar){
    return array.map(stylishChar).reduce(function(pre,cur){
            return pre + cur;
    })
}
console.log(concatArray(arr,multiple(2)))
console.log(concatArray(arr,plus(3)))
