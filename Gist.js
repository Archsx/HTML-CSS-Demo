 function quickSort(arr) {
     if (arr.length < 2) {
         return arr;
     }
     var temp = arr.pop();
     var smaller = arr.filter(function (ele) {
         return ele <= temp
     })
     var greater = arr.filter(function (ele) {
         return ele > temp;
     })
     return quickSort(smaller).concat([temp]).concat(quickSort(greater))

 }


//  var observable = create(function (observer) {
//      observer.next(1)
//      observer.next(2)
//      observer.next(3)
//      observer.complete()
//      observer.next("still work")
//  })
//  var observer = {
//      next: function (value) {
//          console.log(value)
//      },
//      complete: function () {
//          console.log("complete")
//      }
//  }
//  observerable.subscribe(observer)

//  function create(fn) {
//      function Observable(fn) {
//          this.process = fn;
//      }
//      Observable.prototype.subscribe = function (observer) {
//          this.process(observer)
//      }
//      return new Observable(fn)
//  }
// function create(fn){
//     var observable = {
//         subscribe:function(observer){
//             fn(observer)
//         }
//     }
//     return observable
// }