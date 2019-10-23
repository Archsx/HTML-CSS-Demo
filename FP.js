/*function foo(x){
    console.log(x)
}
function bar(y,f){
    f(y)
}
bar("hello world",foo)

var arr = [1,2,3,3,12,24]
function traverseArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(`index:${i},value:${arr[i]}`)
    }
}
traverseArray(arr)

*/





/*function mapLike(arr){
    for(let i = 0; i < arr.length;i++){
        console.log(`index:${i},value:${arr[i]}`)
    }
}
mapLike(arr)*/

/*function mapLike(arr,fn){
    for(let i = 0; i < arr.length;i++){
        fn(arr[i],i,arr)
    }
}
mapLike(arr,function sb(v,k){
    console.log(`index:${k} value${v}`)
})

function maptest(arr,fn){
    let result = []
    for(let i =0; i < arr.length;i++){
        result.push(fn(arr[i],i,arr))
    }
    return result;
}
console.log(maptest(arr,function(v){
    return v+12
}))*/
/*let arr = [1,2,3,4,5]
function reduceLike(arr,fn,init){
    let initial = init || arr.shift();
    if(arr.length === 1){
        return fn(initial,arr[0])
    }
    initial = fn(initial,arr.shift())
    return reduceLike(arr,fn,initial)
}
var result = reduceLike(arr,function(x,y){
    console.log(x)
    return x + y;
})
console.log(result);

/**reduce函数的非递归实现方法
 * function reduce(actionFunction, list, initial){
    var accumulate;
    var temp;
    if(initial){
        accumulate = initial;
    }
    else{
        accumulate = list.shfit();
    }
    temp = list.shift();
    while(temp){
        accumulate = actionFunction(accumulate,temp);
        temp = list.shift();
    }
    return accumulate;
};
 * 
 * @param {any} n
 * @returns
 */

/*function countdown(n){
    if(n == 0){
        return;
    }
    console.log(n);
    n -= 1;
    countdown(n)
}
countdown(10)


function factorial(n){
 if(n == 1){
     return 1;
 }
 else{
     return n * factorial(n - 1)
 }
}
console.log(factorial(5))*/

let car_position = [0,0,0]
/*function race(time){
    for(let i = 0;i < time;i++){
        for(let j = 0; j < car_position.length; j++){
            if(Math.random() > 0.3){
                car_position[j] +=1
            }
        }
        console.log(car_position)
    }
}*/
/*function race(time){
    time -= 1;
    let length = car_position.length;
    if(time === 1){
        return;
    }else{
        
        if(Math.random()>0.3){

        }
    }
    race(time)
}
function loop(){

}
race(5)

*/
function move_cars(){
    for(let i = 0; i < car_position.length; i++){
        if(Math.random()>0.3){
            car_position[i] += 1
        }
    }
}

function draw_car(car_position){
    console.log(car_position)
}

function run_step_of_race(){
    time  -= 1;
    move_cars()
}

var time = 5;
while(time){
    run_step_of_race()
    draw_car(car_position)
}

function reduce(array,fn,initial){
    let accumulate;
    let current;
    if(initial){
        accumulate = initial;
    }else{
        accumulate = array.shift();
    }
     current = array.shift();
     while(current){
         accumulate = fn(accumulate,current);        
         current = array.shift();
     }
     return accumulate;
}
var arr = [1,2,3]
var res = reduce(arr,function(x,y){
    return x + y
},10)
console.log(res)
console.log(res)
console.log(res)
console.log(res)
