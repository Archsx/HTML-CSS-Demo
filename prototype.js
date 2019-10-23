function Person(name) {
    this.name = name;
    this.age = 0;
}
Person.prototype = {
    indroduce: function () {
        console.log(this.name)
    }
}
var foo = new Person("xxx")
foo.indroduce()



var a = function (name) {
    this.name = name;
}
console.log(a.prototype)
var b = function () {
    console.log("oops")
}
b.prototype.show = function () {
    console.log("yeah")
}
console.log(b.prototype)
var c = new b();
console.log(c)
c.show()
console.log(Array.prototype)






function Foo() {}
Foo.prototype.name = "sb"
var bar = new Foo();
Foo.prototype.name = "sx"
var baz = new Foo();
console.log(bar.name)
console.log(baz.name)
console.log(bar.__proto__ === baz.__proto__)
console.log(Foo.prototype)
console.log(baz.__proto__)



