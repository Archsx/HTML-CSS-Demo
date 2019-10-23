var statistic = {}

/*
    这几种方式都可行





function count(str){
    for(let i = 0; i < str.length; i++){
        if(!statistic[str.charAt(i)]){
            statistic[str.charAt(i)] = 1
        }else{
            statistic[str.charAt(i)] += 1
        }
    }
}*/

/*function count(str){
    Array.prototype.map.call(str,function(v){
        if (statistic[v]){
            statistic[v] += 1
        }else{
            statistic[v] = 1
        }
    })
}
*/
function count(str){
    Array.prototype.reduce.call(str,function(pre,cur){
        if(pre[cur]){
            pre[cur] +=1
        }else{
            pre[cur] = 1
        }
        return pre;
    },statistic)
}



var str = "My name is sx,Hello world";
count(str);
console.log(statistic)