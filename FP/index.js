var _  = require ('lodash');
var match = _.curry((reg,str)=>str.match(reg))
var filter = _.curry((f,arr)=>arr.filter(f));

var haveSpace = match(/\s+/g)
// console.log(haveSpace('adhbahjbdfhja')) //null
// console.log(haveSpace('hello world')) //[' ']
console.log(filter(haveSpace,['sjhdjahdj','this is it']))//['this is it']


/**
 * ES5写法的curry
 */

// to complete 
// var curry = function(f){
//     return function(g){
//         return 
//     }
// }


// var add = function(a){
//     return function(b){
//         return a + b;
//     }
// }
// var add2 = add(2);
// console.log(add2(3))//5


/**
 * ES5写法的compose
 */
function compose(f,g){
    return function(x){
        return f(g(x))
    }
}
var add2 = x => x + 2;
var mul5 = x => x*5;
var add2ThenMul5 = compose(mul5,add2)
console.log(add2ThenMul5(2))//20


var first = arr => arr[0];
var reverse = arr => arr.reverse()
var last = compose(first,reverse)
console.log(last([1,2,3,4,5]))//5