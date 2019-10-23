function* generatorForLoop(num) {
  for (let i = 0; i < num; i++) {
    yield console.log(i)
  }
}

const genForLoop = generatorForLoop(5);

genForLoop.next()
genForLoop.next()
genForLoop.next()
genForLoop.next()
genForLoop.next()


function* withYield(a) {
  let b = 5;
  yield a + b;
  b = 6;
  yield a * b
}

const calcSix = withYield(6)
console.log(calcSix.next().value)
console.log(calcSix.next().value)



function* gen() {
  yield 5
}
const foo = gen()
console.log(foo.next()) //{value:1,done:false}，虽然只有一个yield，但是在这个时候done还是false,注意对比下下面的return的情况
console.log(foo.next()) //{value:undefined,done:true}，到这个时候done才为true


function* gen1() {
  yield 1;
  return 2;
  yield 3
}
const bar = gen1()
console.log(bar.next()) //{value:1,done:false}
console.log(bar.next()) //{value:2,done:true}看这里！遇到return的时候这时候done为true了
console.log(bar.next()) //{value:undefined,done:true}


function* gen2(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3
}

function* gen3(j) {
  yield* gen2(j) //注意此处的调用的写法是*gen2(j)
}

const baz = gen3(3) //此处的写法则没有带*
console.log(baz.next().value)
console.log(baz.next().value)
console.log(baz.next().value)



function* gen5(arr) {
  for (let index in arr) {
    yield index
  }
}

const tmp = gen5([1, 2, 3, 4, 5])
for (let j of tmp) { //这里用for of循环一次性得到了生成器所有的值，而不是对象！！！
  console.log(j)
}
//0->1->2->3->4
console.log(tmp.next()) //{value:undefined,done:true}。发现了吗！！经过for of循环，这里的结果直接为{value:undefined,done:true}



function* randomFrom(...arr) {
  while (true) {
    yield arr[Math.floor(Math.random() * arr.length)]
  }
}

const getRandom = randomFrom(1, 2, 12, 17, 24)
console.log(getRandom.next().value)




function* fibonacci(seed1, seed2) {
  while (true) {
    yield(() => {
      seed2 = seed2 + seed1;
      seed1 = seed2 - seed1;
      return seed2
    })();
  }
}
const fib = fibonacci(0, 1)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)



const strings = document.querySelectorAll('.string');
const btn = document.querySelector('#btn')
const className = 'darker'

function* addClassToEach(elements, className) {
  for (const el of Array.from(elements)) {
    yield el.classList.add(className);
  }
}

const addClassToStrings = addClassToEach(strings, className)

btn.addEventListener('click', (el) => {
  if (addClassToStrings.next().done) {
    el.target.classList.add(className)
  }
})


function* throttle(func, time) {
  let timeID = null;

  function throttled(arg) {
    clearTimeout(timeID);
    timeID = setTimeout(func.bind(window, arg), time)
  }
  while (true) {
    throttled(yield)
  }
}

const thr = throttle(console.log, 1000)
thr.next()
thr.next()




function run(taskDef) {
  let task = taskDef()
  let result = task.next()

  function step() {
    if (!result.done) {
      result = task.next(result.value)
      step()
    }
  }
  step()
}

function run(taskDef) {
  let task = taskDef()
  let result = task.next()

  function step() {
    if (!result.done) {
      if (result.value && typeof result.value.then === 'function') {
        result.value.then(d => {
          result = task.next(d)
          step()
        })
      } else {
        result = task.next(result.value)
        step()
      }
    }
  }
  step()
}

const asyncWork = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(12)
  }, 2000)
})

run(function* () {
  let value = yield asyncWork
  console.log(value)
  value = yield value + 3
  console.log(value)
})


/**
 * 
 * @param {*} x 我想说，下面的例子有两个点需要注意，第一个，generator函数也可以有参数。第二个，generator函数内部例如 foo = yield bar这样的形式，foo的值由谁来决定？并不是bar，而是下一次g.next(baz)里面的baz，这也对应了上面166行result = task.next(d)，如果异步函数结果之间有依赖，虽然我们形式上写成foo = yiled bar,（bar是一个promise对象），但其实run函数里面还是写了第166行的内容，不要被形式迷惑了
 */

function* gen(x) {
  var y = yield x + 2
  return y
}

var g = gen(3)
console.log(g.next()) //{value:5,done:false}
console.log(g.next()) //{value:undefined,done:true}


function* gen() {
  let tmp;
  try {
    tmp = yield 2
  } catch (error) {
    console.log(error)
  }
  return tmp
}
let g = gen()
g.next()
console.log(g.throw('error').value)




var Thunk = function (fn) {
  return function (...rest) {
    return function (callback) {
      rest.push(callback)
      return fn.apply(this, rest)
    }
  }
}

var readFileThunk = Thunk(fs.readFile)
readFileThunk(fileA)(callback)

function thunkify(fn) {
  return function () {
    var args = new Array(arguments.length)
    var ctx = this
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    return function (done) {
      var called
      args.push(function () {
        if (called) return;
        called = true
        done.apply(null, arguments)
      })
      try {
        fn.apply(ctx, args)
      } catch (err) {
        done(err)
      }
    }
  }
}



/**
 * 下面的例子表明，有时候我们知识借助generator函数做一个流程控制，
 * 并没有使用g.next().value或者g.next(foo)这样的形式
 */

function* gen() {
  for (let i = 0; i < 5; i++) {
    yield console.log(i)
  }
}
let g = gen()
g.next()
g.next()
g.next()
g.next()
g.next()

/**
 * 
 * @param {*} a 这里需要注意的是，generator函数并不是只有通过g.next(foo)才能往里面传值
 *              也可以通过函数传参的形式往里面赋值
 *              当然也可以在函数里面let一个值
 */
function* withYield(a){
  let b = 5;
  yield a + b;
  b = 6;
  yield a * b
}


const calcSix = withYield(6)
console.log(calcSix.next().value)//11
console.log(calcSix.next().value)//36


/**
 * 这里需要注意的是，g.next的结果的done状态和generator函数里面的return有关，当运行完return的时候，这时候的结果为done，
 * 假如这个函数里面没有写return，比如yield 1;yield 2;这样的形式，要看作函数最后还有隐藏的return undefined，故有{value:2,done:false}
 */

function* generator(){
  yield 1;
  yield 2;
  return 3;
}

var g = generator()
console.log(g.next())//{value:1,done:false}
console.log(g.next())//{value:2,done:false}
console.log(g.next())//{value:3,done:true}

/**
 * 这里需要注意的点有个
 * 1.for(let foo  of bar)会遍历迭代器(bar)，但是这里的foo是value，而不是对象
 * 2.上面的循环的foo只是generator函数里面的yield后面的值，和return的值无关
 * 3.经过上面的循环，g.next()直接为{value:undefined,done:true}
 */
function* generator(){
  yield 1;
  yield 2;
  return 3;
}
var g = generator()
for(let el of g){
  console.log(el) //1 2
}
console.log(g.next())


function *randomFrom(...rest){
  while(true){
    yield rest[Math.floor(Math.random()*rest.length)]
  }
}
const getRandom = randomFrom(1,2,5,9,4)
console.log(getRandom.next().value)

const strings = document.querySelectorAll('.string');
const btn = document.querySelector('#btn')
const className = 'darker'



// function addCLass(elements, className) {
//   let i = 0;
//   elements = Array.from(elements)
//   return function() {
//     if (i < elements.length) {
//       elements[i].classList.add(className)
//       i++
//       return false
//     }else{
//       return true
//     }
//   }
// }
// const stringsAddClass = addCLass(strings,className)
// btn.addEventListener('click',function(e){
//   if(stringsAddClass()){
//     this.classList.add(className)
//   }
// })

function* addClass(elements,className){
  elements = Array.from(elements)
  for(let ele of elements){
    yield ele.classList.add(className)
  }
}
const stringsAddClass = addClass(strings,className)
btn.addEventListener('click',function(e){
  if(stringsAddClass.next().done){
    this.classList.add(className)
  }
})

function* throttle(fn,time){
  let timerId
  function thr(params) {
    if(timerId){
      clearTimeout(timerId)
     timerId =  setTimeout(fn.call(window,params),time)
    }else{
     timerId =  setTimeout(fn.call(window,params),time)
    }
  }
  while(true){
    thr(yield)
  }
}
const print = throttle(console.log,1000)
// print.next()
print.next('hello')

function* throttle(fn,time,params){
  let timerId
  function thr() {
    clearTimeout(timerId)
    timerId = setTimeout(fn.bind(this,params),time)
  }
  while(true){
    yield thr()
  }
}

const foo = throttle(console.log,10000,"hello")
foo.next()
foo.next()