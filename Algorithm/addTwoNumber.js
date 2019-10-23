function addTwoNumber(l1,l2){
  let c1 = l1.head
  let c2 = l2.head
  let c3,l3
  let carry = 0
  while(c1 || c2 || carry){
    let v1 = 0
        v2 = 0

    if(c1){
      v1 = c1.value
      c1 = c1.next
    }
    if(c2){
      v2 = c2.value
      c2 = c2.next
    }
    let sum = v1 + v2 + carry
    carry = Math.floor( sum / 10)

    if(!c3){
      l3 =  new LinkList()
      l3.append( sum % 10 )
      c3 = l3.head
    }else{
      c3.next = new Node( sum % 10)
      c3 = c3.next
    }

  }
  return l3
}