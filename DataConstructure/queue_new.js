class Queue extends Array {
  constructor() {
    super()
  }
  enqueue(element) {
    this.push(element)
  }
  dequeue() {
    return this.shift()
  }
  front() {
    return this[0]
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
  print() {
    console.log(this.toString())
  }
}

class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue extends Queue {
  /**
   * 我这里忘记了如果构造函数需要参数的话是不是这样写的了
   */
  constructor() {
    super()
  }
  enqueue(element, priority) {
    let queueElement = new QueueElement(element, priority)
    if (this.isEmpty()) {
      this.push(queueElement)
    } else {
      /**
       * 这里是比较优先级，然后适当的插入，当然，这里的插入用了数组的splice方法。
       */
      let added = false
      let length = this.size()
      for (let i = 0; i < length; i++) {
        if (queueElement.priority < this[i + 1].priority) {
          this.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        this.push(queueElement)
      }
      // let i = 0
      // while(!added && i < length){
      //  if( queueElement.priority >= this[i].priority ){

      //  }else{
      //    i += 1
      //  }
      // }
      // for(let i = 0; i < length; i++){
      //   if(this[i+1]){
      //     if(){

      //     }else{

      //     }
      //   }else{
      //     if(queueElement.priority >= this[i].priority && queueElement.priority <  this[i+1].priority){
      //       this.splice(i,0,queueElement)
      //     }else{

      //     }
      //   }
      //   // if(queueElement.priority >= this[i].priority && ){
      //     // 
      //   // }
      // }
    }
  }
}



// var queue = new Queue()
// queue.enqueue('hello')
// queue.enqueue('hello')
// queue.print()



function hotPotato(nameList) {
  let queue = new Queue()
  nameList.map((ele) => {
    queue.enqueue(ele)
  })
  while (queue.size() > 1) {
    let randomNumber = Math.random() * 1000 % (queue.size())
    for (let i = 0; i < randomNumber; i++) {
      queue.enqueue(queue.dequeue())
    }
    let loser = queue.dequeue()
    console.log(`${loser} Failed`)
  }

  let winner = queue.dequeue()
  return winner
}
let people = ['aa','bb','cc','dd','ee','ff']
console.log(hotPotato(people))