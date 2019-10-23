// function foo(){
//     foo.a = function(){
//         console.log(1)
//     }
//     this.a = function(){
//         console.log(2)
//     }
//     a = function(){
//         console.log(3)
//     }
//     var a = function(){
//         console.log(4)
//     }
// }
// foo.prototype.a = function(){
//     console.log(5)
// }
// foo.a = function(){
//     console.log(6)
// }
// foo.a()
// var obj = new foo();
// obj.a()
// foo.a()


// var fn = function(){
//   console.log(this)
// }.bind( {name:'frank'} )
// fn.call( {name:'jack'} )



// var fn = function(){
//   console.log(this)
// }.bind( {name:'frank'} )
// fn() 


// function fn1(){
//   function fn2(){
//     console.log(this)
//   }
//   return fn2
// }

// fn1.call({name:'frank'}).call({name:'jack'})


function fn1(){
  function fn2(){
    console.log(this)
  }
  fn2()
}

fn1.call({name:'frank'})