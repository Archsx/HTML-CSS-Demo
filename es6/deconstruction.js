let [a,b,c] = [1,2,3]
console.log(a,b,c)//1 2 3 

let [d,e=2] = [3]
console.log(d,e)//3 2

let [f,g=2] = [4,5]
console.log(f,g)//4 5

let [h=10,i=11] = [undefined,null]
console.log(h,i)//10 null

let [j=1,k=j] = [2]
console.log(j,k)//2 2 



let [name,age] = ['hunger',3]
let p1 = {name,age}
//let p1 = {name:name,age:age}


let {name,age} = {name:'jirengu',age:4}
console.log(name,age)//jirengu 4


let name
let age
({name:name,age:age} = {name:'jirengu',age:4})


let {x,y=5} = {x:1}//注意这里设置默认值的写法
console.log(x)//1
console.log(y)//5



function add([x=1,y=2]){
  return x + y
}
console.log(add([]))//3

function add([x,y]=[1,2]){
  return x + y
}
console.log(add())//3


function ajax({url,type="GET"}){//这里其实比较容易疑惑，这样写其实相当于{url:url,type:type}，表名参数是一个对象，同时里面有两个变量，给其中一个变量设置了默认值为GET，而真正调用函数的时候为赋值，这时候才给url赋值为“http://...”,而未指定type的值故默认为GET
//...
}
ajax({url:'http://....'})



// export default function(){
//   console.log('hello')
// }

// import sayHello from '../....'
// sayHello()




function add(x=3,y=7){
  return x + y
}
console.log(add(10,2))//12 
console.log(add(9))//16



var person = {
  name:'sx',
  age:20,
  gender:'male',
  passport:'G-123',
  school:'No.4'
}
var {name,age,passport} = person
console.log(name)//sx
console.log(age)//20
console.log(passport)//G-123

var person = {
  name:'sx',
  age:20,
  gender:'male',
  passport:'G123',
  school:'No.4',
  address:{
    city:'Beijing',
    street:'No.1 Road',
    zipcode:'100001'
  }
}

var {name,address:{city,zip}} = person;

/**
 * 如果要使用的变量名和属性名不一致
 */
var person ={
  name:'sb',
  age:17,
  passport:'G-123456789'
}
//把passport属性的值赋值给变量id
let {name,passport:id} = person
console.log(name)//sb
console.log(id)//G-123456789
//注意，passport不是变量，而是为了让变量id获得passport属性的值
// console.log(passport)//passport is not defined

/**
 * 下面是使用默认值的写法，注意和上面的写法比较
 */

let {age,single=true} = person
console.log(age)//17
console.log(single)//true


var {hostname:domain,pathname:path} = location


function buildDate({year,month,day,hour=0,minute=0,second=0}){
  return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second)
}

