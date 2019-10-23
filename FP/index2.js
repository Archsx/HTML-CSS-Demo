var Ct = function (x) {
    this.value = x;
}

Ct.of = function (x) {
    return new Ct(x)
}
// console.log(new Ct('fry'))//Ct { value: 'fry' }
// console.log(Ct.of('fry')) //Ct { value: 'fry' }
Ct.prototype.map = function (f) {
    return Ct.of(f(this.value))
}
var res = Ct.of(3)
            .map(x => x + 1)
            .map(x => x * 6)
console.log(res)//Ct {value:24}