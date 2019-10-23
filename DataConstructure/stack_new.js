// class Stack {
//  constructor() {
//    return new Array()
//  }

// }


class Stack extends Array {
  constructor() {
    super()
  }
  push_(element) {
    this.push(element)
  }
  pop_() {
    return this.pop()
  }
  peek() {
    return this[this.length - 1]
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
  clear() {
    this.length = 0
  }
  print() {
    console.log(this.toString())
  }
}
// var foo = new Stack()
// foo.push_(1)
// foo.push_(2)
// foo.push_(3)
// foo.print()
// console.log(foo)
// console.log(foo.peek())
// console.log(foo.isEmpty())
// console.log(foo.size())
// foo.clear()
// console.log(foo)


/**
 * 
 * 在循环条件那里就写错了，还是因为其实自己没能搞懂这个过程
 */

// function divideBy2(decNumber){
//   let stack = new Stack()
//   while(Math.floor(decNumber / 2) !== 0){
//     decNumber / 2 % 1 === 0 ? stack.push(0):stack.push(1)
//     decNumber = Math.floor(decNumber / 2)
//   }

// }


function divideBy2(decNumber) {
  let stack = new Stack()
  let str = ''
  while (decNumber > 0) {
    stack.push_(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }
  // while(!stack.isEmpty()){
  //   str += stack.pop_()
  // }
  while (stack.size() !== 0) {
    str += stack.pop_()
  }
  return str
}


function divideByN(decNumber, n) {
  let stack = new Stack()
  let str = ''
  while (decNumber > 0) {
    stack.push_(decNumber % n)
    decNumber = Math.floor(decNumber / n)
  }
  while (stack.size() !== 0) {
    str += stack.pop_()
  }
  return str
}

console.log(divideByN(10, 5))



function parenthesesChecker(symbols) {
  let stack = new Stack(),
    // balanced = true,
    // symbol, top,
    opens = "([{",
    closers = ")]}"
  for (let index = 0; index < symbols.length; index++) {
    let ele = symbols[index]
    if (opens.indexOf(ele) !== -1) {
      stack.push_(ele)
    } else if (closers.indexOf(ele) === opens.indexOf(stack.peek())) {
      stack.pop_()
    } else {
      if (ele === ' ') {
        continue
      }
      return false
    }
  }
  // Array.prototype.map.call(symbols, function (ele) {
  //   if (opens.indexOf(ele) !== -1) {
  //     stack.push_(ele)
  //   } else if (closers.indexOf(ele) === opens.indexOf(stack.peek())) {
  //     stack.pop_()
  //   } else {
  //     return false
  //   }
  // })
  return stack.size() === 0 ? true : false
}



console.log(parenthesesChecker('{{{)}}}}}}}}}}}}}}}}'))
console.log(parenthesesChecker('{{{} }}'))