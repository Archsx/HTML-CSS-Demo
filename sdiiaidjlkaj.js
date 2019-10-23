// function getElementsInArray(arr,n){
//     var result = [];
//     var count = arr.length;
//     var index;
//     while(result.length < n){
//        index = parseInt(Math.random()*1000)%count
//        if(arr[index]){
//            result.push(arr[index])
//            arr[index] = undefined
//        }
//     }
//     return result;
// }
// var array = [1,2,3,4,5,6,7,8,9,10]
// console.log(getElementsInArray(array,3))


// var arr = []
// arr[1] = 'sb'
// arr[9] = 'sx'
// console.log(arr.length)
// console.log(arr[0])
function quickSort(arr){
    if(arr.length<2){
        return arr;
    }
    var temp = arr.pop();
    var smaller = arr.filter(function(ele){
        return ele <= temp
    })
    var greater = arr.filter(function(ele){
        return ele > temp;
    })
    return quickSort(smaller).concat([temp]).concat(quickSort(greater))

}
console.log(quickSort([11,3]))