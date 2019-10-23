var myObject = {
    get a(){
        return 2
    }
}
Object.defineProperty(myObject,'b',{
    get:function(){
        return this.a * 2
    },
    enumerable:true
})
console.log(myObject.a)
console.log(myObject.b)


var obj = {
    get a(){
        return this.foo
    },
    set a(val){
        this.foo = val * 2
    }
}
obj.a = 1
console.log(obj.a)