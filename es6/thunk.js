var x = 1
function f(m){
  return m * 2
}

f(x + 5)

var thunk = function(){
  return x + 5
}

function f(thunk){
  return thunk() * 2
}


fs.readFile(fileName,callback)


var thunk = function(fileName){
  return function(callback){
    return fs.readFile(fileName,callback)
  }
}

var readFileThunk = thunk(fileName)
readFileThunk(callback)