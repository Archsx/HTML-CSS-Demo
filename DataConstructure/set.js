class Set extends Object{
  constructor(){
    super()
  }
  has(value){
    return this.hasOwnProperty(value)
  }
  add(value){
    if(!this.has(value)){
      this[value] = value
      return true
    }
    return false
  }
  remove(value){
    if(this.has(value)){
      delete this[value]
      return true
    }
    return false
  }
  clear(){
    
  }
  size(){
    return Object.keys(this).length
  }
  sizeLegacy(){
    var count = 0
    for(var prop in this){
      if(this.hasOwnProperty(prop)){
        count += 1
      }
    }
    return count
  }
  values(){
    return Object.keys(this)
  }
  union(otherSet){
    let unionSet = new Set()
    let values = this.values()
    for(let i = 0;i < values.length;i++){
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for(let i = 0; i < values.length;i++){
      unionSet.add(values[i])
    }
    return unionSet
  }
  intersection(otherSet){
    let intersectionSet = new Set()
    let values = this.values()
    for(let i = 0; i < values.length; i++){
      if(otherSet.has(values[i])){
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }
  difference(otherSet){
    let differenceSet = new Set()
    let values = this.values()
    for(let i = 0; i < values.length;i++){
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }
  subSet(otherSet){
    if(this.size() > otherSet.size()){
      return false
    }else{
    let values = this.values()
    for(let i =0;i < values.length;i++){
      if(!otherSet.has(values[i])){
        return false
      }
    }
    return true
  }
}

}


// var set = new Set()
// set.add(1)
// set.add(2)
// console.log(set.values())
// console.log(set.has(3))
// console.log(set.size())
// console.log(set.remove(2))
// console.log(set.size())



var setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

var setB = new Set()
setB.add(1)
setB.add(3)
setB.add(7)
setB.add(12)
setB.add(24)

var setC = new Set()
setC.add(1)
setC.add(2)
setC.add(3)
setC.add(12)

console.log(setA.union(setB).values())
console.log(setA.intersection(setB).values())
console.log(setA.difference(setB).values())
console.log(setA.subSet(setB))
console.log(setA.subSet(setC))

