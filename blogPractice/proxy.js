// const me = {
//   name:'小明',
//   like:'小红'
// }

// const meWithProxy = new Proxy(me,{
//   get(target,prop){
//     if(prop === 'like'){
//       return '学习'
//       // return function(){
//       //   return '学习'
//       // }
//     }
//     return target[prop]
//   }
// })
// console.log(me.like)
// console.log(meWithProxy.like)
// console.log(meWithProxy.name)
// console.log(meWithProxy.like())   


const me = {
  name:'xiaoming',
  musicPlaying:true
}

const meWithProxy = new Proxy(me,{
  set(target,prop,value){
    if(prop === 'musicPlaying' && value !== true){
      throw Error("can't stop")
    }
    target[prop] = value
  }
})

console.log(me.musicPlaying) //true
me.musicPlaying = false  //无反应,这说明了Proxy这样的用法主要是用新的proxy对象，而不是target。毕竟有什么事先找“代理”
console.log(meWithProxy.musicPlaying)//false 我之前以为target和proxy是对等的，因为下面的例子说明handler中没写怎么处理get的话，访问proxy对象就是访问target对象
                                    //但是这里就说明反过来则不行，我这里直接对target对象进行set,但是却没有触发proxy对象中的Error
meWithProxy.musicPlaying = false //Error: can't stop





const me = {
  name:'xiaoming',
  musicPlaying:true
}

const meWithProxy = new Proxy(me,{
  set(target,prop,value){
    if(prop === 'musicPlaying' && value !== true){
      throw Error("can't stop")
    }
    target[prop] = value
  }
})
console.log(meWithProxy.musicPlaying) //true 由于handler中没写对于get的处理，所以这里直接get到me.musicPlaying


const me = {
  name:'xiaoming',
  musicPlaying:false
}

const meWithProxy = new Proxy(me,{
  set(target,prop,value){
    if(prop === 'musicPlaying' && value !== true){
      throw Error("can't stop")
    }
    // target[prop] = value // 这一句很重要，对比上面的情况，这里没写假如我们设置value为true时该如何处理，所以在设置meWithProxy为true之后没有效果，此时的me.musicPlaying和meWithProxy.musicPlaying仍为false。上面没写get的处理，则直接访问me.musicPlaying。
                            // 最上面的小红小明like的例子也写了 return target[prop] ，所以，无论get还是set，都需要明确写该怎么处理
                            // 还有，这里的参数比较有意思。set的参数为target,prop,value,在下面的meWithProxy.musicPlaying = true这句中，似乎并没有这几个参数，但是其实要注意，这里的target仿佛不是一个参数，而是绑定的和let p = new Proxy(target, handler)一样，也就是这个例子中的me
  }
})

meWithProxy.musicPlaying = true
console.log(me.musicPlaying) //false
console.log(meWithProxy.musicPlaying)//false


import axios from 'axios'
const api = new Proxy({},{
  get(target,prop){
    const method = /^[a-z]+/.exec(prop)[0] //得到的为get，因为正则决定了小写
    const path = '/' + prop.substring(method.length) //得到"Users$Books"
                             .replace(/([a-z])([A-Z])/g,'$1/$2')//    'Users$Books'
                             .replace(/\$/g,'/$/')//     'Users/$/Books'
                             .toLowerCase()//       'users/$/books'
                             // 最后path为'/users/$/books'
    return (...args) =>{ //这里我后来才明白，console.log(api.xxx)的话得到的结果是[Function],也就是这个函数，而api.xxx()这样的话才是执行了这个呃函数
      const url = path.replace(/\$/g,() => args.shift())//  '/users/42/books'
      const options = args.shift() // {params:{page:2}}
      console.log('Requesting:',method,url,options)
      return axios({method,url,...options})

    }           
  }
})







api.getUsers$Books(42,{param : { page : 2 } })
// 获取ID为42的用户的所有书籍的第二页
// GET /users/42/books?page=2













let validator = {
  set(obj,prop,value){
    if(prop === 'age'){
      if(!Number.isInteger(value)){
        throw new Error('The age is not an integer')
      }
      if(value > 200){
        throw new Error('invalid age')
      }

    }
    obj[prop] = value
  }
}

let person = new Proxy({},validator)
person.age = 100
// person.age = 201
person.age = 'young'




let view = new Proxy({
  selected:null
},{
 set(obj,prop,newval){
  let oldval = obj[prop]
  if(prop === 'selected'){
    if(oldval){
      oldval
    }
  }
 } 
})




let products = new Proxy({
  browsers:['Internet Explore','Netscape']
},{
  get(obj,prop){
    if(prop === 'latestBrowser'){
      return obj.browsers[obj.browsers.length -1]
    }
    return obj[prop]
  },
  set(obj,prop,value){
    if(prop === 'latestBrowser'){
      obj.browsers.push(value);
      return true
    }
    if(typeof value === 'string'){
      value = [value]
    }
    obj[prop] = value
  }
})

  console.log(products.browsers)
  products.browsers = 'Firefox'
  console.log(products.browsers)


  products.latestBrowser = 'Chrome'
  console.log(products.browsers)
  console.log(products.latestBrowser)




  let products = new Proxy([
    {name:'Firefox',type:'browser'},
    {name:'Chrome',type:'browser'},
    {name:'Thunderbird',type:'mailer'}
  ],{
    get(obj,prop){
      if(prop in obj){
        return obj[prop]
      }

      if(prop === 'number'){
        return obj.length
      }

      let result
      let types = {}
      for(let product of obj){
        if(product.name === prop){
          result = product
        }
        if(types[product.type]){
          types[product.type].push(product)
        }else{
          types[product.type] = [product]
        }
      }

      if(result){
        return result
      }
      if(prop in types){
        return types[prop]
      }
      if(prop === 'types'){
        return Object.keys(types)
      }
      return undefined
    }
  })

  console.log(products[0])
  console.log(products.number)
  console.log(products['Firefox'])
