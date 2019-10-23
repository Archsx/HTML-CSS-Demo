const regex = /ab+c/
let regex = new RegExp("ab+c")
let regex = new RegExp(/^[a-zA-Z]+[0-9]*\W?_$/,"gi")

let res = "cbbabbbbcdebc".match(/ab*c/)
console.log(res)//[ 'abbbbc', index: 3, input: 'cbbabbbbcdebc' ] 这个例子不难，但是我想说的是和下面的^ $这两个特殊付豪的比较，正则匹配的本来是字符中的任何一部分，如果加了^则注重开头，则包含中间部分了。例如"nA is".match(/^A/) 结果为null。同理还有$,"eater".match(/t/),结果为[ 't', index: 2, input: 'eater' ],而"eater".match(/t$/)结果为null,再比如 "aaa1231231t".match(/\d+t$/)，结果为[ '1231231t', index: 3, input: 'aaa1231231t' ]

"123abc".match(/\d+/)//[ '123', index: 0, input: '123abc' ]
"123abc".match(/\d+?/)//[ '1', index: 0, input: '123abc' ]

var txt = "We are the so-called \"Vikings\"from the north"

let regex = /(\d{4})-(\d{2})-(\d{2})/
let str = "2017-06-12"
regex.test(str)

console.log(RegExp.$1)//2017
console.log(RegExp.$2)//06
console.log(RegExp.$3)//12


let regex = /(\d{4})-(\d{2})-(\d{2})/
let str = '2017-06-12'
let res = str.replace(regex,"$2+$3/$1")
console.log(res)//06+12/2017

let regex = /(\d{4})-(\d{2})-(\d{2})/
let str = 'a2017-06-12'
let res = str.replace(regex,"$2+$3/$1")//可见replace方法只会替换匹配正则的部分，不被正则匹配的部分则不变
console.log(res)//a06+12/2017



let regex = /(\d{4})-(\d{2})-(\d{2})/
let str = "2017-06-12"
let result = string.replace(regex,function(match,year,month,day){
  return month + "/" + day + "/" + year
})



let regex = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/
let str1 = "2017-06-12"
let str2 = "2017/06/12"
let str3 = "2017.06.12"
let str4 = "2017-06.12"
console.log(regex.test(str1))//true
console.log(regex.test(str2))//true
console.log(regex.test(str3))//true
console.log(regex.test(str4))//true


let regex =/\d{4}(-|\/|\.)\d{2}\1\d{2}/

let str4 = "2017-06.12"
console.log(regex.test(str4))//false



var regex = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#) \10+/;
var string = "123456789# ######"
console.log( regex.test(string) );

/**
 * 
 * @param {*} str 这个方法是我第一次的尝试，但是明显不行，因为如果字符中间有空格，则无法匹配，是\S这个没选好
 */              // /^\s*(\S*)\s*$/.exec(' aaa a aa    ') //null

function trim(str){
  return str.replace(/^\s*(\S*)\s*$/,'$1')
}
console.log(trim("  aa a ")) //"  aa a "


function trim(str){
  return str.replace(/^\s*(.*)\s*$/,"$1")
}
console.log(trim("  aa a "))//"aa a "

function trim(str){
  return str.replace(/^\s*(.*?)\s*$/,"$1")
}
console.log(trim("  aa a "))//"aa a" 这才是成功了，注意到上面的？是精髓

function trim(str){
return str.replace(/^\s*|\s*$/g,'')
}
console.log(trim('  aaa a aa    '))//"aaa a aa" 这里需要注意上面的g是精髓 g 修饰符用于执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
                                   // "Is this all there is?".match(/is/)
                                   //[ 'is', index: 5, input: 'Is this all there is?' ]
                                   // "Is this all there is?".match(/is/g)
                                   //[ 'is', 'is' ]

                                   // 这里需要注意|这个符号，x|y匹配‘x’或者‘y’
                                  //   "red blue".match(/red|blue/)
                                  //  [ 'red', index: 0, input: 'red blue' ]
                                  //   "red blue".match(/red|blue/g)
                                  //  [ 'red', 'blue' ]
                                  // 发现差异了吗？加了g之后明显不同
                                   
function titleize(str){
  return str.replace(/([a-z]*?)\w+/g,function(c){
    // console.log(RegExp.$1)
    // return RegExp.$1
    return toUpperCase()
  })
}
console.log(titleize("a man says"))


function titleize(str) {
	return str.toLowerCase().replace(/(?:^|\s)\w/g, function(c) {
    console.log(c)
		return c.toUpperCase();
	});
}
console.log( titleize(' my name is epeli') );

var str = 'a1 b2 c3'
var reg = /(\w\d)/g
console.log(reg.exec(str))
// console.log(str.match())
// console.log(RegExp.$1)

// reg.exec(str)无论reg中有没有g，都是匹配第一个，返回值形式为[ 'a1', 'a1', index: 0, input: 'a1 b2 c3' ]

// str.match(reg)当reg中没有g时，结果和上面的一样。
//                    有g时，返回形式不同，为[ 'a1', 'b2', 'c3' ]


let res = "has".replace(/\w/g,'$&'+"$`")
console.log(res)

function camelize(str){
  return str.replace(/-(.)/g,function(m,c){
    return c.toUpperCase()
  })
}


console.log( camelize('-moz-transform') ); // MozTransform

function dasherize(str){
  return str.replace(/[A-Z]/g,function(m){
    return "-" + m.toLowerCase()
  })
}
function dasherize(str){
  return str.replace(/[A-Z]/g,'-$&').replace(/[-_\s]+/g,'-').toLowerCase()
}

console.log( dasherize('MozTransform') ); // -moz-transform


function escapeHTML(str){
  var escapeChars = {
    '¢':'cent',
    '£':'pound',
    '¥':'yen',
    '€':'euro',
    '©':'copy',
    '®':'reg',
    '<':'lt',
    '>':'gt',
    '""':'quot',
    '&':'amp',
    '\'':'#39'
  }
  return str.replace(new RegExp('['+ Object.keys(escapeChars)+']','g'),function(m){
    return '&' +escapeChars[m] + ';'
  })
}
console.log( escapeHTML('<div>Blah blah blah</div>') );


function unescapeHTML(str){
  var htmlEntities = {
    nbsp:' ',
    cent:'¢',
    pound:'£',
    yen:'¥',
    euro:'€',
    copy:'©',
    reg:'®',
    lt:'<',
    gt:'>',
    quot:'"',
    amp:'&',
    apos:'\''
  }
  return str.replace(/\&([^;]+);/g,function(m,key){
    if(key in htmlEntities){
      return htmlEntities[key]
    }
    return m
  })
}
console.log( unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;') );

var regex = /<([^>]+)>[\d\D]*<\/\1>/
var string1 = "<title>regular expression</title>";
var string2 = "<p>laoyao bye bye</p>";
var string3 = "<title>wrong!</p>";
console.log( regex.test(string1) ); // true
console.log( regex.test(string2) ); // true
console.log( regex.test(string3) ); // false


