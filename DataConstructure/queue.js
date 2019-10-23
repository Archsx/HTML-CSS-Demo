const LinkedList = require('./linkedList');
class Queue extends LinkedList {
  constructor() {
    super()
  }
  shift() {
    if (!this.head) return null;
    const originalHead = this.head;
    if (originalHead.next) {
      this.head = originalHead.next
      originalHead.next.prev = null
    } else {
      this.head = null;
      this.tail = null;
    }
    return originalHead.value;
  }
}
// function queueTest(){
//   let queue = new Queue();
//   queue.push(1);
//   queue.push(2);
//   queue.push(3);

//   console.log(queue.shift())
//   console.log(queue.shift())
//   console.log(queue.shift())
// }
// queueTest()


function queueTest2(){
  const array = [25,15,95,71,68,23,12]
  const queues = [];
  for(var i = 0 ;i < 10;i++){
    queues.push(new Queue())
  }
  for (let i = 0; i < 2; i++){
    for(let ele of array){
      let index = Math.floor(ele / Math.pow(10,i)%10)
      queues[index].push(ele)
    }
    const result = [];
    for(const queue of queues){
      let  n = queue.shift();
      while(n){
        result = push(n);
        n = queue.shift()
      }
    }
    array = result;
  }
}
queueTest2()