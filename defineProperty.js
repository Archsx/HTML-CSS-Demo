var obj = {};
    (function(){
        var value = "sb"
        Object.defineProperty(obj, 'name', {
            // value: "Archer",
            writable: false,
            configurable: false,
            enumerable: false,
            get:function(){
                console.log("run get")
                return value;
            },
            set:function(xxx){
                console.log("run set");
                value = xxx
            }
        })
    })();
obj.name = "fry"
console.log(obj.name)