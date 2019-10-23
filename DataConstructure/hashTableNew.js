// function djb2HashCode(key) {
//   var hash = 5381;
//   for (var i = 0; i < key.length; i++) {
//     hash = hash * 33 + key.charCodeAt(i);
//   }
//   return hash % 1013;
// }
const LinkedList = require("./linkedList_new");
class HashTable {
  constructor() {
    this.table = [];
  }
  static djb2HashCode(key) {
    var hash = 5381;
    for (var i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  }
  put(key, value) {
    let position = HashTable.djb2HashCode(key);
    // console.log(position + '-' + key)
    this.table[position] = value;
  }
  put_new(key, value) {
    let position = HashTable.djb2HashCode(key);
    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList();
    }
    this.table[position].append(new ValuePair(key, value));
  }
  get(key) {
    return this.table[HashTable.djb2HashCode(key)];
  }
  get_new(key) {
    let position = HashTable.djb2HashCode(key);
    if (this.table[position] !== undefined) {
      let cur = this.table[position].getHead();

      // if(key === cur.element.key){
      //   return cur.element.value
      // }
      while (cur) {
        if (key === cur.element.key) {
          return cur.element.value;
        }
        cur = cur.next;
      }
      return undefined;
    }
    return undefined;
  }
  remove(key) {
    this.table[HashTable.djb2HashCode(key)] = undefined;
  }
  remove_new(key) {
    if (this.table[HashTable.djb2HashCode(key)] === undefined) {
      return false;
    }
    let cur = this.table[HashTable.djb2HashCode(key)].getHead();
    let index = 0;
    while (cur) {
      if (cur.element.key === key) {
        this.table[HashTable.djb2HashCode(key)].removeAt(index);
        return true;
      }
      index++;
      cur = cur.next;
    }
    return false;
    // let position = HashTable.djb2HashCode(key)
    // if(this.table[position] !== undefined){
    //   let cur = this.table[position].getHead()
    //   while(cur.next){
    //     if(cur.element.key === key){
    //       table[position].remove()
    //     }
    //   }
    // }
  }
  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ":" + this.table[i]);
      }
    }
  }
  put_new_new(key, value) {
    let position = HashTable.djb2HashCode(key);
    if (this.table[position] === undefined) {
      this.table[position] = new ValuePair(key, value);
    } else {
      while (this.table[position] !== undefined) {
        position += 1;
      }
      this.table[index] = new ValuePair(key,value)
    }
  }
  get_new_new(key){
    let position = HashTable.djb2HashCode(key)
    if(this.table[position] !== undefined){
      if(this.table[position].key === key){
        return this.table[position].value
      }else{
        while(this.table[position] !==undefined){
          if(this.table[position].key === key){
            return this.table[position].value           
          }
          position += 1
        }
      }
    }
    return undefined
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return "[ " + this.key + " - " + this.value + " ]";
  }
}

var hash = new HashTable();
hash.put("Gilfoyle", "gilfoyle@email.com");
hash.put("Richard", "richard@email.com");
hash.put("Jared", "jared@email.com");
hash.put_new("Erlich", "erlich@email.com");
hash.print();
hash.remove_new("Erlich");
// hash.get_new('Erlich')
console.log(hash.get_new("Erlich"));
hash.put_new("Erlich", "erlich@email.com");
console.log(hash.get_new("Erlich"));
