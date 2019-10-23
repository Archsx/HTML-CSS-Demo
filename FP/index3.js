var _ = require('lodash')
var compose = _.flowRight
var Maybe = function(x){
    this.value = x;
}
Maybe.of = function(x){
    return new Maybe(x)
}
// Maybe.prototype.isNull = function(prop){
//     return this[prop] ? true : false;
// }
// Maybe.prototype.map = function(f){
//     return this.isNull('value')?Maybe.of(null):Maybe.of(f(this.value))
// }
Maybe.prototype.isNothing = function(){
    return (this.value === undefined || this.value === null)
}
Maybe.prototype.map = function(f){
    return this.isNothing() ? Maybe.of(null):Maybe.of(f(this.value))
}
var add = _.curry(_.add)
var res = Maybe.of({name:'fry'})//Maybe { value: { name: 'fry' } }
     .map(_.property("age"))//Maybe { value: undefined }
     .map(add(10)) //Maybe { value: null }
var res1 = Maybe.of({name:'fry',age:18})
     .map(_.property("age"))//注意_.property()的返回值是一个函数(这个函数返回对象某个属性的值)!
     .map(add(10)) //Maybe { value: 28 }


var f = compose(add(2),_.property('age'))
var map = _.curry(function(f,Functor){
    return Functor.map(f)
})
var handle = map(f)
var result = handle(Maybe.of({age:15}))
console.log(result)//Maybe { value: 17 }