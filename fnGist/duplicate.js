function duplicates(arr) {
    let obj = {};
    arr.map(function (ele) {
        obj[ele] ? obj[ele]++ : obj[ele] = 1
    })
    let array = Object.keys(obj);
    let result = [];
    array.map(function (ele) {
        if (obj[ele] !== 1) {
            result.push(parseInt(ele))
        }
    })
    return result
}
let arr = [1, 2, 4, 4, 3, 3, 1, 5, 3];
console.log(duplicates(arr))


function duplicatesWithOrder(arr){
    var newArr = [];
    arr.map(function(ele,index){
        let tempArr = arr.slice(index+1)
        if(tempArr.indexOf(ele) !== -1 && newArr.indexOf(ele) === -1){
            newArr.push(ele)
        }
    })
    return newArr
}
console.log(duplicatesWithOrder(arr))




















