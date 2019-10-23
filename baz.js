function haddleRequestBody(request,fn){
    let body = [];
    request.on('data',function(chunk){
        body.push(chunk)
    }).on('end',function(){
        body = Buffer.concat(body).toString()
    })
    fn(body)
}

haddleRequestBody(request,function(body){
    let parts = body.split('&');
    let username = parts[0].split('=')[1]
    let password = parts[1].split('=')[1]
    
})