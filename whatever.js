let a = {name:"xxx"}
let b = '{"name":"xxx"}';
console.log(b.name)//undefined,因为b是字符串，所以b.name为undefined
let c = JSON.parse(b)//{name:'xxx'}这是一个对象
console.log(c.name)//xxx
console.log(a === JSON.parse(b))//false,这个不知道是为什么

/**
 * 需要注意的是，JSON格式的键名（key）必须是双引号，如上面b中的"name"
 * 老师在课堂中说，index.js中的response.end这个函数只能接受字符串，所以进行了JSON.stringify({errors:errors}),
 * 这样将Javascript中的对象(类比上面的a)转化成了字符串(类比上面的b)
 * 同样，index.html中浏览器接收到的responseText是字符串，我们要取出里面的errors的具体内容，
 * 所以JSON.parse(responseText),这样就把responseText这个字符串（b）转化成对象（a）啦
 */