// var it = makeIterator(['a','b']);
// function makeIterator(array){
//     var nextIndex = 0;
//     return {
//         next:function(){
//             return nextIndex < array.length ?
//             {value:array[nextIndex++],done:false}:
//             {value:undefined,done:true}
//         }
//     }
// }
// console.log(it.next())







// const obj = {
//     [Symbol.iterator]:function(){
//         return {
//             next:function(){
//                 return {
//                     value:1,
//                     done:false
//                 }
//             }
//         }
//     }
// }


// let arr = ["a","b","c"]
// let iter = arr[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())



// var obj = {
//     name:"sb",
//     age:12
// }
// for(let value of obj){
//     console.log(value)
// }

let obj = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

console.log(obj)


let iter = obj[Symbol.iterator]()
console.log(iter.next())


function createIterator(items){
  var i = 0;
  return {
    next:function(){
      var done = ( i >= items.length);
      var value = !done ? items[i++] :undefined;
      return {
        done,value
      }     
    }
  }
}


var axios = require('axios')
function* gen(){
  let url = 'https://api.github.com/users/github'
  let result = yield axios.get(url)
  console.log(result)
}
let g = gen();
let res = g.next().value
res.then(function(result){
  g.next(result)
})
