/*
 *  Object 原型
 */
const OP = Object.prototype;
/*
 *  需要重写的数组方法 OAR 是 overrideArrayMethod 的缩写
 */
const OAM = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

 class Jsonob{
    constructor(obj, callback){
        if(OP.toString.call(obj) !== '[object Object]'){
            console.error('This parameter must be an object：' + obj);
        }
        this.$callback = callback;
        this.observe(obj);
    }
    
    /**
	 * 监测数据对象
	 * @param   {Object}  obj    [要监测的数据对象]
	 * @param   {Array}   path   [属性路径]
	 */
    observe(obj, path){
        if(OP.toString.call(obj) === '[object Array]'){
            this.overrideArrayProto(obj, path);
            return
        }
        Object.keys(obj).forEach(function(key, index, keyArray){
            var oldVal = obj[key];
            var pathArray = path && path.slice(0);
            if(pathArray){
                pathArray.push(key);
            }else{
                pathArray = [key];
            }
            
            Object.defineProperty(obj, key, {
                get: function(){
                    return oldVal;
                },
                set: (function(newVal){
                    if(oldVal !== newVal){
                        if(OP.toString.call(newVal) === '[object Object]' || OP.toString.call(newVal) === '[object Array]'){
                            this.observe(newVal, pathArray);
                        }
                        this.$callback(newVal, oldVal, pathArray);
                        oldVal = newVal;
                    }
                    
                }).bind(this)
            });
            
            if(OP.toString.call(obj[key]) === '[object Object]' || OP.toString.call(obj[key]) === '[object Array]'){
                this.observe(obj[key], pathArray);
            }
            
        }, this);
        
    }
    
    /**
	 * 重写数组的方法
	 * @param   {Array}   array     [数组字段]
	 * @param   {Array}   path      [属性路径]
	 */
    overrideArrayProto(array, path){
        var originalProto = Array.prototype,
            overrideProto = Object.create(Array.prototype),
            self = this,
            result;
        
        OAM.forEach(function(key, index){
            var method = OAM[index],
                oldArray = [];
                // console.log(this)
            
            Object.defineProperty(overrideProto, method, {
                value: function(){
                    oldArray = array.slice(0);
                    // console.log(this)
                    var arg = [].slice.apply(arguments);
                    result = originalProto[method].apply(array, arg);
                    
                    self.observe(array, path);
                    self.$callback(array, oldArray, path);
                    
                    return result;
                },
                writable: true,
                enumerable: false,
                configurable: true
            });
        }, this);
        
        array.__proto__ = overrideProto;
        
    }
}
var callback = function(newVal, oldVal){
  console.log('新值：' + newVal + '----' + '旧值：' + oldVal);
};

var data = {
  a: 200,
  level1: {
      b: 'str',
      c: [{w: 90}, 2, 3],
      level2: {
          d: 90
      }
  }
}

var j = new Jsonob(data, callback);

data.level1.c.push(4);