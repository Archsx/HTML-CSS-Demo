var array = [2,5,7]
console.log(array.reduce(function(pre,cur,index){
    pre[index++] = cur;
    return pre;
},{}))