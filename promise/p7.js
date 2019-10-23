var next=(function (){ 
  var promise=Promise.resolve(); 
  return (url)=>{ 
    promise=promise.then(()=>{ 
      return new Promise((reslove)=>{ 
        setTimeout(()=>{
          $('.input').val(url); 
          console.log(url);
          reslove(); 
        },Math.random()*1000);
      }); 
     }); 
  };
})(); 



var next = (function(){
    var promise = Promise.resolve()
    return function(url){
        promise = promise.then(function(){
          return new Promise(function(resolve,reject){
             setTimeout(function(){
              $('.input').val(url)
              resolve()
            },Math.random()*1000)
          })
        })
    }


})();














var next = (function () {
    var promise = Promise.resolve();
    return function (url) {
        promise = promise.then(() => {
            return new Promise((reslove) => {
                $.ajax({
                    url,
                    success(res) {
                        $('input').val(res);
                        reslove();
                    }
                });
            });
        });
    }
})();
$('.but1').click(() => {
    next('url1');
});
$('.but1').click(() => {
    next('url2');
});
$('.but3').click(() => {
    next('url3');
});









