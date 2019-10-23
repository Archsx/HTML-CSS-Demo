var fs = require('fs');
// var thunkify = require('thunkify');
var thunkify = function(fn){
    return function(){
        var args = Array.prototype.slice.call(arguments)
        return function(cb){
            var called = false;
            args.push(function(){
                if(called){
                    return;
                }
                called = true;
                cb.apply(null, arguments);//这一句最难，注意这个arguments是传入这个匿名函数的参数,也就是sum;
            })
           return  fn.apply(this,args)
        }
    }
}
var readFile = thunkify(fs.readFile)

var gen = function* (){
    var r1 = yield readFile('/home/suxun/package.json')
    console.log(r1.toString());
    // console.log(r1)//一堆buffer
    var r2 = yield readFile('/home/suxun/test.js')
    console.log(r2.toString());
}


// var iter = gen();

// iter.next().value(function(err,data){
//    var r2 =  iter.next(data);
//    r2.value(function(err,data){
//        iter.next(data)
//    })

// })


function run(gen){
    var iter = gen();
    function next(result){
        if(result.done)  return;
        result.value(function(err,data){
            result = iter.next(data)
            next(result);
        })       
    }
    next(iter.next());
}
run(gen)




function run(gen) {
  var iter = gen();

  function next(err, data) {
    var result = iter.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

run(gen)















// r1.value(function(err, data){
//   if (err) throw err;
//   var r2 = g.next(data);
//   r2.value(function(err, data){
//     if (err) throw err;
//     g.next(data);
//   });
// });

// iter.next().value(function(err,data){
//     iter.next(data)
// })
// iter.next(2).value(function(err,data){
//     iter.next(data)
// })