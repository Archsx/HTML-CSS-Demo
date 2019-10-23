class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  /**
   *
   * @param {*} element 向列表尾部添加新的项
   */
  append(element) {
    if (!this.head) {
      this.head = new Node(element, null);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(element, null);
    }
    this.length++;
  }
  insert(position, element) {
    if (position > -1 && position < this.length) {
      if (position === 0) {
        let preHead = this.head;
        this.head = new Node(element, preHead);
      } else {
        let index = 0;
        let cur = this.head;
        // let pre
        while (index < position) {
          index += 1;
          // pre = cur
          cur = cur.next;
        }
        cur.next = new Node(element, cur.next);
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let cur = this.head,
        index = 0,
        pre;
      if (position === 0) {
        this.head = cur.next;
      } else {
        while (index < position) {
          index += 1;
          pre = cur;
          cur = cur.next;
        }
        pre.next = cur.next;
      }
      this.length--;
      return cur.element;
    } else {
      return null;
    }
  }
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }
  indexOf(element) {
    let index = 0;
    let cur = this.head;
    while (cur) {
      if (element === cur.element) {
        return index;
      }
      index += 1;
      cur = cur.next;
    }
    return -1;
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  toString() {
    let cur = this.head,
      str = "";
    while (cur) {
      // str += cur.element + ' '
      str += cur.element + (cur.next ? ", " : "");
      cur = cur.next;
    }
    return str;
  }
  print() {}
  getHead(){
    return this.head
  }
}
// var list = new linkedList();
// list.append(1);
// list.append(2);
// list.insert(1, 3);
// console.log(list.length);
// console.log(list.toString());
// console.log(list.indexOf(1));
// console.log(list.remove(1));
// console.log(list.toString());
// console.log(list.head)

class DoublyNode {
  constructor(element, prev, next) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}
class DoublyLinkedList {
  constructor(head, tail) {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  insert(element, position) {
    if (position >= 0 && position <= this.length) {
      if (!this.head && !this.tail) {
        let newNode = new DoublyNode(element, null, null);
        this.head = newNode;
        this.tail = newNode;
      } else {
        let index = 0;
        let cur = this.head;
        let pre;
        while (index < position) {
          cur = cur.next;
          index += 1;
        }
        pre = cur.prev;
        let newNode = new DoublyNode(element, pre, cur);
        pre.next = newNode;
        cur.prev = newNode;
        if (position === 0) {
          this.head = pre;
        }
        if (position === this.length) {
          this.tail = cur;
        }
      }
      this.length++;
    } else {
      return false;
    }
  }
  insert(element, position) {
    if (position >= 0 && position <= this.length) {
      let newNode = new DoublyNode(element, null, null);
      if (position === 0 || position === this.length) {
        if (position === 0) {
          newNode.next = this.head;
          this.head = newNode;
        }
        if (position === this.length) {
          newNode.prev = this.tail;
          this.tail = newNode;
        }
        this.length++
      } else {
        let index = 0;
        let cur = this.head;
        let pre;
        while (index < position) {
          cur = cur.next;
          index += 1;
        }
        pre = cur.prev;
        let newNode = new DoublyNode(element, pre, cur);
        pre.next = newNode;
        cur.prev = newNode;
        this.length++
      }
    } else {
      return false;
    }
  }
  removeAt(position) {
    if (position > -1 && position < this.length) {
      //  if (!this.head) {
      //     return false
      //   } 这三行都可以不要的，最开始写下这三行是因为受到了之前写insert时的影响，上面if的条件position > -1 && position < this.length已经排除了此时的链表是一个空链表的情况了，而我从未注意这些细节。
      if (position === 0) {
        let preHead = this.head
        let head = preHead.next
        this.head = head
        if (this.length === 1) {
          this.tail === null
        }
      } else if (position === this.length - 1) {
        let preTail = this.tail
        let tail = preTail.prev
        this.tail = tail
      } else {
        let index = 0
        // let pre
        let cur = this.head
        while (index < position) {
          cur = cur.next
          index++
        }
        cur.prev.next = cur.next
        cur.next.prev = cur.prev
      }
      this.length -= 1
    } else {
      return false
    }
  }




  /**
   * 上面写的方法本来没有什么大问题，但是经过对比，我发现存在一个比较明显的缺陷，那就是没有考虑返回值的问题，我并没有思考这个方法的返回值是什么，所以参考书上的答案再写一次
   * 
   * @param {any} position 
   * @memberof DoublyLinkedList
   */
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let cur = this.head
      let pre
      let index = 0
      if (position === 0) {
        let newHead = cur.next
        this.head = newHead
        if (this.length === 1) {
          this.tail = null//这里需要注意，position === 0再加上length === 1包含了下面的position === this.length -1同时length === 1的情况，下面不要重复        } else {
          newHead.prev = null
        }
      } else if (position === this.length - 1) {
        let tail = this.tail
        tail.prev.next = null
        this.tail = tail.prev
        cur = tail
      } else {
        while (index < position) {
          pre = cur
          cur = cur.next
          index += 1
        }
        pre.next = cur.next
        cur.next.prev = pre
      }
      this.length -= 1
      return cur.element
    } else {
      return null
    }
  }
}
module.exports = linkedList