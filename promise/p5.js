function Promise(){
    this.state = "pending"
    this.data = undefined;
    this.callbackQueue = []
    if(resolver){executeResolver.call(this,resolver)}
}

function executeResolver(resolver){
    var called = false;
    _this = this;
    function resolve(value){
        if(called){
            return;
        }
        called = true;
        executeCallback.bind(_this)('resolve',value);
    }
    function reject(reason){
        if(called){return;}
        called = true;
        executeCallback.bind(_this)('reject',value)
    }
    try{
        resolver(resolve,reject)
    }catch(e){
        reject(e)
    }
}
function executeCallback(type,x){
    var thenable;
    var isResolve;
    isResolve = type === "resolve";
        // [标准 2.3.3] 如果x是一个对象或一个函数
    if(isResolve && (typeof x === 'object' || typeof x === 'function')){
	  //[标准 2.3.3.2]
      try{
        thenable = getThen(x);
      }catch(e){
        return executeCallback.bind(this)('reject', e);
      }
    }
    if(isResolve && thenable){
      executeResolver.bind(this)(thenable);
    }else{
      //[标准 2.3.4]
      this.state = isResolve ? "resolved" : "rejected";
      this.data = x;
      this.callbackQueue && this.callbackQueue.length && this.callbackQueue.forEach(v => v[type](x));
    }
    return this;
}