// function proc(){

// }
// function findEven(numbers){
//     for(let number of numbers){
//         if(number%2 == 0){

//         }
//     }
// }




// function proc(number){
//     if(number%2==0){
//         number = number * 3;
//         console.log(`${number} is even`)
//     }
// }

// var numbers = [1,5,52,35,7.2,6,12];
// for(let number of numbers){
//     proc(number)
// }



function* even_filter(nums){
    for(let num of nums){
        if(num%2==0){
            yield num;
        }
    }
}

function* multiply_by_three(nums){
    for(let num of nums){
        yield num*3;
    }
}
function* convert_to_string(nums){
    for(let num of nums){
        yield `The Number:${num}`
    }
}


var nums = [1,3,5,12,24,36,2]
var pipeline = convert_to_string(multiply_by_three(even_filter(nums)))
for(let num of pipeline){
    console.log(num)
}
// 生成器函数执行后，产生一个可迭代的对象（个人理解为值的“集合”，并不完全恰当，因为这里的值是可以重复的），（这个可迭代对象可以用for..of循环遍历，这时候得到的就直接是value，不像后面的.next方法），这个可迭代对象还有一个方法叫next,返回一个对象，这个对象有两个属性，一个是value一个是done。