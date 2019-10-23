class Node {
  // constructor(value, next) {
  //   this.value = value; //节点的数据
  //   this.next = next; //下个节点的位置
  // }
  constructor(value, next, prev) {
    this.value = value; //节点的数据
    this.next = next; //下个节点的位置
    this.prev = prev; //这样添加prev属性是为了实现双向链表，当然这里并没有实现。
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insert(value, preNodeValue) {
    const newNodeToInsert = new Node(value)
    if (!this.head) {
      this.head = newNodeToInsert;
      this.tail = newNodeToInsert;
      return;
    }
    const preNode = this._findNode(preNodeValue);
    if (!preNode) {
      return;
    }
    const originalPreNodeNext = preNode.next;
    preNode.next = newNodeToInsert;
    newNodeToInsert.prev = preNode
    if (originalPreNodeNext) {
      newNodeToInsert.next = originalPreNodeNext;
      originalPreNodeNext.prev = newNodeToInsert
    } else {
      this.tail = newNodeToInsert;
    }
  }
  _findNode(value) { //这里用下划线开头的函数暗示类似于Typescript里面道德静态方法，只能在class内部使用
    if (!this.head) {
      return null
    }
    if (this.head.value == value) {
      return this.head
    }
    let cur = this.head;
    while (cur.next) {
      cur = cur.next
      if (cur.value === value) {
        return cur
      }
    }
    return null;
    // let cur = this.head;
    // while(cur.value !== value){
    //   cur = cur.next
    // }
    // return cur;这样写看似简单，但是需要注意，假如并不能在这个链表中找到这个节点，也就是说最后一个cur.next此时为undefined,那么此时返回值cur也就是undefined
  }
  push(value) {
    const newNodeToPush = new Node(value, null)
    if (!this.tail) {
      this.head = newNodeToPush;
      this.tail = newNodeToPush
    } else {
      this.tail.next = newNodeToPush;
      newNodeToPush.prev = this.tail
      this.tail = newNodeToPush
    }
  }
  pop() {
    if (!this.tail) {
      return null;
    }
    const originalTail = this.tail;
    if (originalTail.prev) {
      this.tail = originalTail.prev;
      originalTail.prev.next = null
    } else {
      this.head = null;
      this.tail = null;
    }
    return originalTail.value;


    //if(!this.tail) return null;
    // const originalTail = this.tail;
    // this.tail = originalTail.prev;
    // if(originalTail.prev) originalTail.prev.next = null;
    // return originalTail.value
  }
  removeOneNodeAfter(value) {
    const markNode = this._findNode(value)
    if (!markNode) {
      return
    }
    if (markNode.next && markNode.next.next) { //其实这里不用判断markNode.next.next是否存在，因为假如不存在那么就是undefined。
      const intervalNode = markNode.next.next
      if (!intervalNode) {
        this.tail = markNode
      }
      markNode.next.next = null;
      markNode.next = intervalNode
    }
  }
  toString(){
    if(!this.head) return '';
    let cur = this.head;
    let str = cur.value.toString();
    while(cur.next){
      cur = cur.next;
      str += cur.value.toString()
    }
    return str;
  }
}
// function linkedListTest(){
//   const arr = new Array(100000)
//   for(var i = 0; i < 100000;i++){
//     arr[i] = i;
//   }
//   // console.time('shift array element')
//   // for(var i = 0; i < 100000;i++){
//   //   arr.shift()
//   // }
//   // console.timeEnd('shift array element')
//   console.time('pop array element')
//   for(var i = 0; i < 100000;i++){
//     arr.pop()
//   }
//   console.timeEnd('pop array element')
//   const linkedList = new LinkedList()
//   for (var index = 0; index < 100000; index++) {
//     linkedList.push(index)
//   }
//   console.time('shifting a linkedList element')
//   for (var j = 0; j < 100000;j++){
//     linkedList.removeOneNodeAfter(0)
//   }
//   console.timeEnd('shifting a linkedList element') 
// }
// linkedListTest()
module.exports = LinkedList