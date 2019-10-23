function findAllOccurrences(arr, target) {
    let newArr = [];
    arr.filter(function(ele,index){
       return  ele === target && newArr.push(index)
    })
    return newArr
}

let foo = [1,2,3,5,7,7,1]
console.log(findAllOccurrences(foo,1))




// function foo(num,n){
//   n ? n : n = 1;
//   return  Math.floor(num/Math.pow(10,n)) === 0 ? n : foo(num,n + 1)
// }

// console.log(foo(12))