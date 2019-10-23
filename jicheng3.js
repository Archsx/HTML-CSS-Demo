// o = Object.create({}, { p: { value: 42 } })
// o.p = 24
// console.log(o.p)




o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
/* with ES5 Accessors our code can look like this
    get function() { return 10; },
    set function(value) {
      console.log('Setting `o.bar` to', value);
    } */
  }
});
o.foo = "oops";
// console.log(o.foo);
console.log(o.bar())