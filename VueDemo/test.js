Foo.prototype.getLength = function() {
  var length = this.string.length // expensive computation
  this.getLength = function(){return length};
  return length;
}
function Foo(str){
    this.string = str; 
}
var str = new Foo("hahahhah")
console.log(str.getLength())
str.string += "sbsbsbsb";
console.log(str.getLength())