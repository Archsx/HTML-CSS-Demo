function foo() {
  return Array.prototype.slice.call(arguments) //这里把类数组对象转化为数组的方法其实可以用其他方式代替，比如Array.from()
}
console.log(foo(1, 2, 3)) //[1,2,3]

const bar = foo.bind(null, 'bar')

console.log(bar()) //['bar']
console.log(bar(1, 2, 3)) //['bar',1,2,3]

function baz() {
  return Array.from(arguments)
}
console.log(baz('sb')) //['sb']


function temp(...arr) {
  console.log(arr instanceof Array) //true，发现了吗？这里的arr直接就是数组，也就不需要像上面那样再做转化
  console.log(arr) //[4,5,6]
}
temp(4, 5, 6)


function* throttle(fn, time) {
  let timerID = null

  function control(...args) {
    clearTimeout(timerID)
    timerID = setTimeout(function () {
      fn.apply(null, args)
    }, time)
  }
  while (true) {
    control(yield)
  }
}
const thr = throttle(console.log, 1000)
thr.next()
thr.next('hello')

let val = 100

function* test() {
  val = yield 1
}
const foo = test()
console.log(val)
foo.next()
console.log(val)

let a = 9999

function fn() {
  a = 100
}

function* test2() {
  fn(yield)
}
const bar = test2()
bar.next()
bar.next()
console.log(a)



