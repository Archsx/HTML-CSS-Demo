var arr = [1, 3, 5, 6, 7, 9, 2, 12]
// function get(arr,n){
//     n--;
//     if(n === 0){
//         return arr.splice(parseInt(Math.random()*arr.length),1)
//     }
//     return arr.splice(parseInt(Math.random()*arr.length),1).concat(get(arr,n))
// }
console.log(get(arr, 5))
console.log(get(arr, 2))

var get = function (arr, n) {
        let res =[];
        for (let i = 0; i < n; i++) {
            let randomNumber = Math.floor(Math.random() * arr.length)
            let temp = arr.splice(randomNumber, 1);
            if(res[0] == undefined){
                Array.prototype.push.apply(res,temp)
            }
            for (let value of res) {
                if (value !== temp) {
                Array.prototype.push.apply(res,temp)
                }
                console.log(value)
            }
        }
        return res;
    }
    var arr = [1, 3, 5, 6, 7, 9, 2, 12]
    console.log(get(arr, 5))
console.log(get(arr, 2))


console.log( 0 == undefined)
var a = []
console.log(a.concat([1]))
console.log(a)










// var arr1 = [1]
// var arr2 = [2] 
// console.log(arr1.concat(arr2))
// console.log(arr1.push.apply(arr2))
// console.log(arr1)
// console.log(arr2)


// var a = [1, 2, 3]
// var b = [4, 5, 6]
// console.log(Array.prototype.push.apply(a,b))
// console.log(a)
// console.log(b)