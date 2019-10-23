function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function(){
    console.log("My name is" + this.name)
}

function Student(name,age,sex){
    Person.call(this,name,age)//这一句很容易被忽略
    this.sex = sex;
}
Student.prototype = Object.create(Person.prototype);
console.log(Student.prototype.constructor)//[Function: Person]
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor)//[Function: Student]
Student.prototype.say = function(){
    console.log("I'm man")
}
// Student.prototype = Object.create(Person.prototype);
var lilei = new Student("lilei",0,"male")
// lilei.say()
lilei.introduce()


function inherit(childFn,parentFn){
    childFn.prototype = Object.create(parentFn.prototype);
    childFn.prototype.constructor = childFn;
}