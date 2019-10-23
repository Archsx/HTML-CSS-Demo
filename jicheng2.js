function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function(){
    console.log("My name is" + this.name)
}


function Foo(){

}
// Object.assign(Foo.prototype,Person.prototype)
Foo.prototype = Object(Person.prototype);
var sb = new Foo("sb",12)
sb.introduce()











function fn(){}
fn.prototype = Person.prototype;
Student.prototype = new fn();













