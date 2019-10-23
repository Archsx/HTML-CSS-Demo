/*var str = "I am sx, Hello World";
var hash = [];
for(var i = 0; i < str.length; i++ ){
    var letter = string[i]
    if(letter in hash){
        hash[lletter] += 1 
    }else{
        hash[letter] = 1
    }
}
*/

/*这就是所谓的桶排序 */
var array = [2,11,3,12,4,5,12]
var hash= [];
for(var i =0;i<array.length;i++){
    var number = array[i];
    if(number in hash){
        hash[number] += 1
    }else{
        hash[number] =1
    }
}

var result = [];
for(let j = 0;j < hash.length;j++){
    if(hash[j] !== undefined){
        for(let k = 0;k < hash[j];k++){
            result.push(j)
        }
    }
}
console.log(result)


let temp = Math.floor((height - 800) / 500)

let colors = {
    0:"#ffff00",
    1:"#220000",
    2:"#123456"
}

$('.leftbar > div:nth-child(' +(temp+2) +')').css('background',color[temp])