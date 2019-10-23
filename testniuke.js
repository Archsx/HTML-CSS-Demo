var a = ['a','b']
console.log(a.indexOf('c'))
a.splice(1,0,'c')
console.log(a)






function findAllOccurrences(arr, target) {
    var newArr = [];
		 Array.prototype.map.call(arr,function(ele,index){
					if(arr[index] === target){
                         newArr.push(index)
                    }          
        })
         return newArr
}
console.log(findAllOccurrences('abcdefabc','e'))









function functions(flag) {
    if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }

    return getValue();
}
console.log(functions(false))


console.log("9dxsa1 67\n33".match(/^\d*/mg))
