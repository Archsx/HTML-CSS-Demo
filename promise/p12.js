var p = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject()    
    },1000)
})
p.catch(function(e){
    console.log(e)
})
console.log(p)