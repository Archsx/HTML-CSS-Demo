function abs(){
  if(arguments.length === 0){
    return 0
  }
  var x = arguments[0]
  return x >= 0 ? x : - x
}
console.log(abs())
console.log(abs(10))
console.log(abs(-10))



function foo(a,b,c){
  if(arguments.length === 2){
    c = b
    b = null
  }
  //.......
}



function foo(a,b){
  var i,
      rest = []
  if(arguments.length > 2){
    for(var i = 2; i < arguments.length;i++){
      rest.push(arguments[i])
    }
  }
  console.log('a = ' + a)
  console.log('b = ' + b)
  console.log(rest)
}
foo(1,2,3,4,5)



function foo(a,b,...rest){
  console.log('a = ' + a)
  console.log('b = ' + b)
  console.log(arguments instanceof Array)// false
  console.log(rest instanceof Array) //true 是不是很奇怪？
}
foo(1,2,3,4,5)

function sum(...args){
  console.log(args instanceof Array) //true 这样写比写arguments要好，因为这样写args直接就是数组，而arguments是类数组对象
  return args.reduce((pre,cur) => pre += cur, 0)
}
sum(1,2,3)