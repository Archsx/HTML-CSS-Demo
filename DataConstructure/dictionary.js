class  Dictionary {
  constructor(){
    new Object()//这里十分奇怪，因为如果加上return的话，生成的dic实例的原型将变成object而不是Dictionary
  }
  has(key){
    // return key in this
    return this.hasOwnProperty(key)
  }
  set(key,value){
    this[key] = value
  }
  remove(key){
    if(this.has(key)){
      delete this[key]
      return true
    }
    return false
  }
  get(key){
    return this.has(key) ? this[key] : undefined
  }
  values(){
    let values = []
    for(let key in this){
      if(this.has(key)){
        values.push(this[key])
      }
    }
    return values
  }
  // getThis(){
  //   return this
  // }我觉得这个函数没什么用
}





var dic = new Dictionary()
console.log(dic.__proto__)
// dic.set('John','abc.com')
// dic.set('Luna','efg.com')
// dic.set('Dave','hij.com')

// console.log(dic.has('Luna'))
// console.log(dic.values())
// console.log(dic.get('Love'))
// dic.remove('Dave')

// console.log(dic.values())