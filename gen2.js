function* foo(){
    yield 3;
    yield 5;
}

var iter = foo()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())





function run(gen){
    var iter = gen();
    function goon(err,data){
        var result = iter.next(data);
        if(result.done){return;}
        result.value(goon)
    }
    goon()
}