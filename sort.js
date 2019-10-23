/*function exchange(a,b){
    var foo;
    if(a > b){
        foo = a;
        a = b;
        b = foo;
    }
    console.log(a,b)//2,5
}

var array = [1,5,2,3];
exchange(array[1],array[2]);
console.log(array)
//                 [ 1, 5, 2, 3 ]*/


function exchange(arr, a, b) {
    var foo;
    if (arr[a] > arr[b]) {
        foo = arr[a];
        arr[a] = arr[b];
        arr[b] = foo;
    }
}

var array = [1, 5, 2, 3];
exchange(array, 1, 2)
console.log(array); //[ 1, 2, 5, 3 ]

/*function bubble(array) {
    var length = array.length;
    var i;
    var j;
    for (i = 1; i < length; i++) {
        for (j = 0; j < length-i+1; j++) {
            exchange(array,j,j+1)
        }
    }

}*/
function bubble(array) {
    var length = array.length;
    var i;
    var j;
    for (i = 1; i < length; i++) {
        for (j = 0; j < length-i+1; j++) {
            if(array[j] > array[j+1]) {
                let foo = array[j+1];
                array[j+1] = array[j];
                array[j] = foo;
            }
        }
    }
}


var test = [2,7,8,3,1];
bubble(test);
console.log(test);