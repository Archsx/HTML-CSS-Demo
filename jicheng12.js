function Animal(type){
  this.type = type
}
Animal.prototype.run = function(){
  console.log(`I am running`)
}
function Persona(type,name){
  Animal.call(this,type)
  this.name = name
}
// Person.prototype.__proto__ = Animal.prototype
// Person.prototype = Object.create(Animal.prototype)
// Person.prototype = new Animal()
function Empty(){}
Empty.prototype = Animal.prototype
Person.prototype = new Empty()
Person.prototype.sayHi = function(){
  console.log(`Hi, I am ${this.name}`)
}

var me = new Person('sx')
me.sayHi()
console.dir(me)





class Animal{
  constructor(type){
      this.type = type
  }//请注意这里没有逗号！
  run(){
      console.log('Im running')
  }
}
class Person extends Animal{//原型链继承,继承父类的原型
  constructor(name){
    super('人类')//运行父类的构造函数，即Animal的constructor
    this.name = name
  }
  // get age(){
  //   return 21
  // }目前还不支持在原型链上写属性，这样写勉强凑活，但不是长久之计
  sayHi(){
    console.log(`Hi,I am ${this.name}`)
  }
}
var me = new Person('sx')
console.dir(me)
