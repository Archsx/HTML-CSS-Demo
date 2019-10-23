var a = 1;
var b = a == 1 ? 5 : 7;
console.log(b);
if(a==10){
console.log("a == 10")
}else if(a==1){
console.log("a == 1")
}
var c = false;
if(c){
    console.log('hhahahhahahhahhahh')
}
var d = new Boolean(false);
if(d){
    console.log('sbsbsbsbbsbsb')
}
var e = Boolean(d);
if(e){
    console.log('ooooooooooooooooooooooooo')
}
var f = (a-1) && 9;
console.log(f)


var g = 10;
switch(g){
    case 1:
    case 2:
    default:
        console.log('default');
    case 3:
        console.log('3');
    case 5:
        console.log('5');
        break;        
}