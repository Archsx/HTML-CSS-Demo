const LinkedList = require('./linkedList')

class HashTable {
  constructor(){
    this.arr = new Array(10)
    for(let i = 0; i < 10; i++){
      this.arr[i] = new LinkedList()
    }
  }
  set(n){
    const hashCode = this.hashCode(n)
    const linkedList = this.arr[hashCode]
    linkedList.push(n)
  }
  get(n){
    const hashCode = this.hashCode(n)
    const linkedList = this.arr[hashCode]
    let p = linkedList.head
    if(!p){
      return null
    }
    while(p.value !==n){
      p = p.next
    }
    return p.value
  }
  delete(){

  }
  hashCode(n){
    return n % 10;
  }
  toString(){
    let str = ''
    for(let linkedList of this.arr){
      str += ' ' + linkedList.toString()
    }
    return str
  }
}


// const a = new Array(10).fill(0)
// a[35 % 10] = 35
// a[71 % 10] = 71
// a[63 % 10] = 63



function hashTabelTest(){
  const hashTable = new HashTable()
  hashTable.set(1)
  hashTable.set(2)
  hashTable.set(3)
  hashTable.set(33)
  hashTable.set(68)
  hashTable.set(98)
  console.log(hashTable.toString())
}

hashTabelTest()