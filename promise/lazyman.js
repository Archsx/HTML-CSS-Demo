// function LazyMan(name){

//   var queue = []

//   queue.push(function() {
//     console.log(`Hi, ${name}`)
//     next()
//   })
//   function next(){
//     queue.shift()
//     queue[0] &&queue[0].call()
//   }

//   setTimeout(function() {
    
//     queue[0].call()

//   }, 0)


//   return {
//     eat: function(what) {
//       queue.push(function() {
//         console.log(`eat ${what}`)
//         next()
//       })
//       return this
//     },
//     sleep: function(n) {
//       queue.push(function() {
//         setTimeout(next, n * 1000)

//       })
//       return this
//     },
//     sleepFirst: function(n) {
//       queue.unshift(function() {

//         setTimeout(next, n * 1000)

//       })
//       return this
//     },
//     queue: queue
//   }

// }

// LazyMan('Frank').eat('dinner').eat('supper')




function LazyMan(name){
    var queue = []
    queue.push(function(){
        console.log(`Hi,${name}`)
        next()
    })
    function next(){
       var task =  queue.shift();
           task && task() 
    }

    setTimeout(function(){
        next()
    },0)

    return {
        eat:function(what){
            queue.push(function(){
                console.log(`eat ${what}`)
                next()
            })
            return this;
            },
        sleep:function(n){
            queue.push(function(){
                setTimeout(next,n*1000)
            })
            return this
        },
        sleepFirst:function(n){
            queue.unshift(function(){
                setTimeout(next,n*1000)
            })
            return this
        },

        queue:queue
    }

}

 LazyMan('Frank').eat('dinner').eat('supper')