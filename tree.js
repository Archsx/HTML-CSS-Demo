var root = {
    name:'生物',
    children:[]
};
function addChild(parent,child){
    parent.children.push(child);
}
addChild(root,{
    name:"动物",
    children:[]
})
addChild(root,{
    name:"植物",
    children:[]
})
addChild(root.children[0],{
    name:'哺乳动物',
    children:[]
})
addChild(root.children[0],{
    name:'爬行动物',
    children:[]
})

addChild(root.children[0],{
    name:'两栖动物',
    children:[]
})
addChild(root.children[1],{
    name:'树木',
    children:[]
})
addChild(root.children[1],{
    name:'花草',
    children:[]
})
addChild(root.children[1],{
    name:'藤蔓',
    children:[]
})
function travelTree(node){
    console.log(node.name);
    for(var i = 0; i < node.children.length; i++){
        travelTree(node.children[i])
    }
}


//console.log(root)
travelTree(root)