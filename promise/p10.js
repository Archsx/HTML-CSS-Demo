function getURLCallback(URL, callback) {
    var req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.onload = function () {
        if (req.status === 200) {
            callback(null, req.responseText);
        } else {
            callback(new Error(req.statusText), req.response);
        }
    };
    req.onerror = function () {
        callback(new Error(req.statusText));
    };
    req.send();
}
// <1> 对JSON数据进行安全的解析
function jsonParse(callback, error, value) {
    if (error) {
        callback(error, value);
    } else {
        try {
            var result = JSON.parse(value);
            callback(null, result);
        } catch (e) {
            callback(e, value);
        }
    }
}
// <2> 发送XHR请求
var request = {
        comment: function getComment(callback) {
            return getURLCallback('http://azu.github.io/promises-book/json/comment.json', jsonParse.bind(null, callback));
        },
        people: function getPeople(callback) {
            return getURLCallback('http://azu.github.io/promises-book/json/people.json', jsonParse.bind(null, callback));
        }
    };
// <3> 启动多个XHR请求，当所有请求返回时调用callback
function allRequest(requests, callback, results) {
    if (requests.length === 0) {
        return callback(null, results);
    }
    var req = requests.shift();
    req(function (error, value) {
        if (error) {
            callback(error, value);
        } else {
            results.push(value);
            allRequest(requests, callback, results);
        }
    });
}
function main(callback) {
    allRequest([request.comment, request.people], callback, []);
}
// 运行的例子
main(function(error, results){
    if(error){
        return console.error(error);
    }
    console.log(results);
});












function getURLCallback(URL,callback){
    var xhr = new XMLHttpRequest()
    xhr.open("GET",URL)
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(null,xhr.responseText);
        }else{
            callback(new Error(xhr.status),xhr.response)
        }
    }
    xhr.send()
}


function jsonParse(callback,error,value){
    if(error){
        callback(error,value)
    }else{
        try{
            var result = JSON.parse(value)
            callback(null,result)
        }catch(e){
            callbak(e,value)
        }
    }
}

var request = {
    comment:function getComment(callback){
        return getURLCallback('http://azu.github.io/promise-book/json/comment.json',jsonParse.bind(null,callback))
    },
    people:function getPeople(callback){
        return getURLCallback('http://azu.github.io/promise-book/json/people.json',jsonParse.bind(null,callback))
    }
}

function 