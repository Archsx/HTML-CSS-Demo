var a = {}
var b = {
    key:"b"
}
var c = {
    key:"cx"
}
console.log(b.toString())
console.log(c.toString())
a[b] = 123;
console.log(a[b])
console.log(a[c])
console.log(a[b] === a[c])