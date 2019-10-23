class Node {
  constructor(value, parent, left, right) {
    this.value = value
    this.parent = parent
    this.left = left
    this.right = right
  }
}

//BST binary search tree
//feature: 1每个节点左边的节点比它小
//         2每个节点右边的节点比它大 

//          [7]
//      [3]     [12]
//    [1][5]       [15]
//         [6] 
//
// delete 3 之后

//          [7]
//       [5]   [12]
//     [1] [6]    [15]
//
//





class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const nodeToInsert = new Node(value, null, null, null)
    if (!this.root) {
      this.root = nodeToInsert
      return
    }
    let node = this.root
    let isSearching = true;
    /**
     * 这是我第一次写的时候的出现的疑惑，本来判断大或者小是同一次循环应该完成的，可是我却错误的写成了两次循环，这样也可以，但是还需要再加一层循环。
     */
    while (isSearching) {
      if (value < node.value) {
        if (node.left) {
          node = node.left
        } else {
          nodeToInsert.parent = node
          node.left = nodeToInsert
          isSearching = false
          return
        }
      } else if (value > node.value) {
        if (node.right) {
          node = node.right
        } else {
          nodeToInsert.parent = node
          node.right = nodeToInsert
          isSearching = false
          return
        }
      } else {
        return
      }
    }
    // while (value < node.value) {
    //   if (node.left) {
    //     node = node.left
    //   } else {
    //     node.left = nodeToInsert
    //     return
    //   }
    //   // node.left ? node = node.left : node.left = nodeToInsert
    // }
    // while (node.right > value) {
    //   if (node.right) {

    //   } else {

    //   }
    // }

  }
  search(value) {
    // let getNode = false
    let node = this.root;
    if ((!node) || (!node.value)) {
      return null
    }
    while (true) {
      if (!node) {
        return null
      }
      if (value === node.value) {
        // getNode = true
        return node
      } else if (value < node.value) {
        node = node.left
      } else {
        node = node.right
      }
    }
    // return null
  }

  /**
   * 感觉删除是最复杂的
   */
  remove(value) {
    let node = this.search(value)
    if (!node.parent) {
      // if (!node.left && !node.right) {
      //   this.root = null;
      //   return;
      // }这样分析下去无穷无尽不能使用这样枚举的方法
      this.root = null;
      return
    }
    if (!node.left && !node.right) {
      if (value < node.parent.value) {
        node.parent.left = null;
        node = null;
        return
      } else {
        node.parent.right = null;
        node = null;
        return
      }
    } else if (node.left && !node.right) {
      node.left.parent = node.parent
      if (node.value > node.parent.value) {
        node.parent.right = node.left
      } else {
        node.parent.left = node.left
      }
      node = null
    }
    // else if (!node.left && node.right) {
    // 这里可以只分析一种 有右枝的情况，不用分析此时是否有左枝,这里最关键的是分析node的右枝是否有左枝。。但是感觉很复杂，因为涉及到的情况很多种，不容易穷举parent,left,right之间的关系
    // }
    else {
      let temp = node
      node = node.right
      if (node.left) {
        while (node.left) {
          node = node.left
        }
        if (node.right) {
          temp.value = node.value
          node.value = node.right.value
          // node.right.parent = null
          node.right = null

        } else {
          temp.value = node.value
          node.parent.left = null
          node = null
        }
      } else {
        if (node.right) {
          temp.value = node.value
          temp.right = node.right
          node.right.parent = temp
          node = null
        } else {


          temp.value = node.value
          temp.right = null
          node.parent = null
        }
      }




      // if (node.right) {
      //   temp.value = node.value
      //   // node.parent.left = node.right
      //   if (true) {
      //     node.parent.left = node.right
      //     node.right.parent = node.parent
      //   } else {

      //     temp.right = node.right
      //     node.right.parent = temp
      //   }
      // } else {
      //   node.parent.left = null;
      //   temp.value = node.value

      // }
      // node = null;
    }

  }
  toString() {

  }
  /**
   * 
   * 中序遍历,感觉很神奇的一种排序
   */
  static inOrder(node) {
    if (node) {
      BinarySearchTree.inOrder(node.left)
      console.log(node.value)
      BinarySearchTree.inOrder(node.right)
    }
  }
  /**
   * 
   *  前序遍历
   */
  static preOrder(node) {
    if (node) {
      console.log(node.value)
      BinarySearchTree.preOrder(node.left)
      BinarySearchTree.preOrder(node.right)
    }
  }
  /**
   * 
   * 后序遍历
   */
  static postOrder(node) {
    if (node) {
      console.log(node.value)
      BinarySearchTree.postOrder(node.left)
      BinarySearchTree.postOrder(node.right)
    }
  }
  static findLeftLeaf(node) {
    if (!node.left) {
      return node
    }
    return BinarySearchTree.findLeftLeaf(node.left)
  }
  
  static findRightLeaf(node){
    if(!node.right){
      return node
    }
    return BinarySearchTree.findRightLeaf(node.right)
  }

}


function BSTTest() {
  let bst = new BinarySearchTree()
  bst.insert(7)
  bst.insert(13)
  bst.insert(3)
  bst.insert(1)
  bst.insert(5)
  bst.insert(6)
  bst.insert(15)
  bst.insert(14)
  bst.insert(12)
  bst.insert(11)
  // BinarySearchTree.inOrder(bst.root)

  // console.log(bst.search(12))
  // console.log('---------------------------')
  // console.log(bst.search(22))
  // console.log('---------------------------')
  // console.log(bst.search(55))
  bst.remove(11)
  BinarySearchTree.inOrder(bst.root)
}

BSTTest()












/**
 * 以下是视频中的写法，个人认为是有问题的
 */
// remove(value){
//   let node = this.search(value)
//   if(!node.parent){
//     this.root = null;
//     return 
//   }
//   if (!node.left && !node.right){
//     if (node.value < node.parent.value){
//       node.parent.left = null;
//       node = null
//     }else if(node.value > node.parent.value){
//       node.parent.right = null;
//       node = null
//     }
//   }else if(node.left && !node.right){
//     if(node.value < node.parent.value){
//      let parent = node.parent
//      let leftChild = node.left
//      parent.left = leftChild
//      leftChild.parent = parent
//      node = null
//     }else if(node.value > node.parent.value){
//      let parent = node.parent
//      let leftChild = node.left
//      parent.right = leftChild
//      leftChild.parent = parent
//      node = null 
//     }
//   }else if(!node.left && node.right){
//     if(node.value < node.parent.value){
//       let parent = node.parent
//       let rightChild = node.right
//       parent.left = rightChild
//       rightChild.parent = parent
//       node = null
//     }else if(node.value > node.parent.value){
//       let parent = node.parent;
//       let rightChild = node.right
//       parent.right = rightChild
//       rightChild.parent = parent
//       node = null
//     }
//   }else if(node.left && node.right){
//     //这样写明显有严重问题
//     if(node.value < node.parent.value){
//       const leftChild = node.left
//       const rightChild = node.right
//       const parent = node.parent
//       parent.left = rightChild
//       rightChild.parent = parent
//       const leftLeaf = BinarySearchTree.findLeftLeaf(rightChild)
//       leftLeaf.left = leftChild
//       leftChild.parent = leftLeaf

//     }else if(node.value > node.parent.value){
//       const leftChild = node.left
//       const rightChild = node.right
//       const parent = node.parent
//       parent.right = leftChild
//       leftChild.parent = parent
//       const rightLeaf = BinarySearchTree.findRightLeaf(leftChild)
//       rightLeaf.right = rightChild
//       rightChild.parent = rightLeaf
//     }
//   }
// }