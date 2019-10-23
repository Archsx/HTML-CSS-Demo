const LinkedList = require('./linkedList')

class Stack{
  constructor (){
   return  new LinkedList();
  }
}

// function stackTest(){
//   const stack = new Stack();
//   stack.push(1);
//   stack.push(2);
//   stack.push(3);

//   console.log(stack.pop())
//   console.log(stack.pop())
//   console.log(stack.pop())
// }
function stackTest(){
  const str = '{{{{{{{}}'
  const stack = new Stack();
  for(let i = 0; i < str.length;i++){
    let elem = str[i];
    if(elem === '{')stack.push(i)
    if(elem === '}')stack.pop()
  }
  console.log(stack.toString())
}
stackTest()