(function(){
    function rt5(){
        return 5
    }
    function dosomethingcool(){
        var test = (typeof rt5 !== 'undefined') ? 
        rt5:
        function(){
            return 10;
        }
        return test();
    }
    console.log(dosomethingcool())
})();

function dosthcool(test){
    var helper = test || function(){}
    var val = helper();
}

var array = [];
array[0] = "love"
console.log(array);
console.log(array.length);


console.log(0.1 + 0.2 === 0.3)


function foo(){
    var param = Array.prototype.slice.call(arguments)
    param.push("sbsbsbsbsbsbsbs")
    console.log(param);
}
foo("bar","baz")

 var x = 42.59;
 console.log(x.toFixed(3));
 console.log(x)


var y = ['f','u','c','k']
console.log(y.reverse());
console.log(y)

var z = 'shit';

var result = y.join('')
console.log(result)


var result1 = Array.prototype.join.call(z,"!")
console.log(result1)


var final = Array.prototype.map.call(z,function(v){
    return v.toUpperCase() + '!'
}).join("")
console.log(final)





var str = "hello   world    "
var str1 = str.trim();
console.log(str1)