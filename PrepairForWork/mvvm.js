var callback = function(newVal,oldVal){
  alert(newVal + '----' + oldVal)
}

var data = {
  a:200,
  level1:{
    b:'str',
    c:[1,2,3],
    level2:{
      d:90
    }
  }
}

var j = new Jsonob(data,callback)


var obj = {}
obj.name = 'hcy'



var obj = {};
Object.defineProperty(obj,'name',{
  value:'hcy',
  writable:true,
  enumerable:true,
  configurabletrue
})


var obj = {}

Object.defineProperty(obj,'age',{
  get:function(){
    return 20
  },
  set:function(newVal){
    this.age += 20
  }
})

const OP = Object.prototype

 class Jsonob {
  constructor(obj,callback){
    if(OP.toString.call(obj) !== '[object Object]'){
      console.error('This parameter must be an object: ' + obj)
    }
    this.$callback = callback
    this.observe(obj)//这里比较有意思，一般的constructor都是this.xxx = yyy,但是这里还有这样用的
  }
  observe(obj){
    Object.keys(obj).forEach(function(key,index,keyArray){
      var val = obj[key]
      Object.defineProperty(obj,key,{
        get:function(){
          return val
        },
        set:(function(newVal){
          this.$callback(newVal)
        }).bind(this)
      });
      if(OP.toString.call(obj[key]) === '[object Object]'){
        this.observe(obj[key])
      }
    },this)//这一行的this注意，是用this给forEach的thisArg赋值，注意这里是赋值，所以这里的this需要观察observe的使用形式，也就是上面constructor的this.observe(obj),所以下面的this其实是上面的this,即new Jsonob之后生成的实例
  }
}
// var Jsonob = Jsonob.Jsonob;

            var callback = function(newVal){
                console.log(newVal);
            };

            var data = {
                a: 200,
                level1: {
                    b: 'str',
                    c: [1, 2, 3],
                    level2: {
                        d: 90
                    }
                }
            }

            var j = new Jsonob(data, callback);

            data.a = 250;
            data.level1.b = 'sss';
            data.level1.level2.d = 'msn';




const OP = Object.prototype

const OAM = ['push','pop','shift','unshift','splice','sort','reverse']

class Jsonob{
  constructor(obj,callback){
    if(OP.toString.call(obj) !== '[object Object]'){
      console.error('The parameter must be a object')
    }
    this.$callback = callback
    this.observe(obj)
  }
  observe(obj){
    if(OP.toString.call(obj) === '[object Array]'){
      this.overrideArrayProto(obj)
    }
    Object.keys(obj).forEach(function(key,index){
      let oldVal = obj[key]
      Object.defineProperty(obj,key,{
        get:function(){
          return oldVal
        },
        set:(function(newVal){
          if(newVal !== oldVal){
           if(OP.toString.call(newVal) === '[object Object]' || OP.toString.call(newVal) === '[object Array]'){
            this.observe(newVal)
           }
            this.$callback(oldVal,newVal)
            oldVal = newVal
          }
        }).bind(this)
      })
      if(OP.toString.call(obj[key]) === '[object Object]' || OP.toString.call(obj[key]) === ''){
        this.observe(obj[key])
      }
    },this)
  }
  overrideArrayProto(array){
    var originalProto = Array.prototype
    var overrideProto = Object.create(Array.prototype)
    var self = this
    var result;
    Object.keys(OAM).forEach(function(key,index,array){
      var method = OAM[index]
      var oldArray = []
      Object.defineProperty(overrideProto,method,{
        value:function(){
          oldArray = this.slice(0)
          var arg = [].slice.call(arguments)
          
        },
        writable:true,
        enumerable:false,
        configurable:true       
      })
    },this)
  }
}

