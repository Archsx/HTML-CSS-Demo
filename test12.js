// function foo(){
//     return function(){
//         return function(){
//             console.log(this.a)
//         }
//     }
// }
// var o1 = {
//     a:1
// }
// var o2 = {
//     a:2
// }
// var a = "opps";
// foo().call(o1)()






// function foo(n,callback){
//     setTimeout(function(){
//         return callback(1)
//     },n)
// }

// foo(1000,console.log)
















//     function thunkify(fn){
//       return function(){
//         var args = new Array(arguments.length);
//         var ctx = this;

//         for(var i = 0; i < args.length; ++i) {
//           args[i] = arguments[i];
//         }

//         return function(done){
//           var called;

//           args.push(function(){
//             if (called) return;
//             called = true;
//             done.apply(null, arguments);
//           });

//           try {
//             fn.apply(ctx, args);
//           } catch (err) {
//             done(err);
//           }
//         }
//       }
//     };


var res=[{id:1, name:'one'},
 {id:3, name:'three'}, 
 {id:2, name:'two'}, 
 {id:5, name:'five'},  
 {id:4, name:'four'}].sort((x,y) => x.id - y.id)

console.log(res)


var E = () => {}
var aliasFor = function(oldName) {
    var fn = function(newName) {
      E[newName] = E[oldName];
      return fn;
    };
    return (fn.is = fn.are = fn.and = fn);
};
aliasFor('reduce').is('reduceLeft').is('foldl')






