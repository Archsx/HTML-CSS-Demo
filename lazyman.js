// function lazyman(name){
//     console.log(name);
//     var queue = []
//     return {
//         sleep:function(time){
//             setTimeout(function(){
//                 queue.map(function(ele){
//                     ele()
//                 })
//             },time*1000)
//             return this;
//         },
//         eat:function(food){
//             queue.push(function(){
//                 console.log("Eat " + food)
//             })
//             return this;
//         }
//     }
// }






// lazyman("fry").sleep(10).eat("dinner")




// var foo = {
//     a:"foo"
// }
// var bar = {
//     a:"bar",
//     show:function(){
//         setTimeout(()=>{
//             console.log (this.a)
//         })
//     }
// }
// var a = 'foo'
// var bar = {
//     a:"bar",
//     show:function(){
//         setTimeout(function(){
//             console.log (this.a)
//         })
//     }
// }

// bar.show()




function lazyman(name){
    var tasks = [];
    tasks.push(function(){
        console.log("This is " + name)
        next();
    })
    function next(){
        var task = tasks.shift();
        task && task()
    }
    setTimeout(next,0)
    return {
        sleep:function(n){
            tasks.push(function(){setTimeout(next,n*1000)})
            return this;
        },
        eat: function(food){
            tasks.push(function(){
                console.log("eat " + food)
                next()
            })
            return this;
        },
        sleepfirst:function(n){
            tasks.unshift(function(){setTimeout(next,n*1000)})
            return this;
        }
    }
}
lazyman("fry").sleep(1).sleep(3).eat('dinner')
// lazyman('fry').eat('dinner').sleepfirst(5)
// lazyman('fry').eat('dinner').sleepfirst(5).eat('supper').sleep(5)
// var goon = (function(){
//     var temp = lazyman("fry")
//     return function(param){
//         if(typeof param === "string"){
//         temp.eat(param)
//         }else{
//         temp.sleep(param)
//         }
//     }
// })();
// goon(3)
// goon('rice')

// var a = {
//     fn:(function(){
//         console.log("oops")
//     })()
// }