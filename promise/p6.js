var fn1 = function(){
    return new Promise((resolve,reject)=>resolve(1))
}
var fn2 = function(data){
    return new Promise((resolve,reject)=>resolve(1+data))
}
var fn3 = function(data){
    return new Promise((resolve,reject)=>resolve(data+2))
}
var fnArr = [fn1,fn2,fn3];
Promise.sequence = function(arr){
    return arr.reduce((acc,cur)=>{
        return acc.then(cur)
    },Promise.resolve());
}
Promise.sequence(fnArr).then(res=>console.log(res))