function binarySearchTree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  var root = null;

  /**
   * Function: Insert
   * Insert some key
   */
  this.insert = function (key) {
    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  /**
   * Function: Search
   * find some key
   */
  this.search = function (key) {
    return searchNode(root, key);
  }

  var searchNode = function (node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }

  /**
   * Function: Remove
   * remove some key
   */
  this.remove = function (key) {
    root = removeNode(root, key);
  }

  var removeNode = function (node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = findMinNode(node.right)
      node.key = auxo.key;
      node.right = removeNode(node.right, aux.key);

      return node;

    }
  }

  var findMinNode = function (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  /**
   * Function: min
   * return lowest key 
   */
  this.min = function () {
    return minNode(root);
  }

  var minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  }

  /**
   * Function: Max
   * return highest key
   */
  this.max = function () {
    return maxNode(root);
  }

  var maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }

  /**
   * Function: inOrderTraverse
   * Pass to all nodes in tree in order
   */
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  }

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * Function: preOrderTraverse
   * pass to all nodes with pre order
   */
  this.preOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  }

  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * Function: postOrderTraverse
   * pass to all nodes with pos order
   */
  this.postOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  }

  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

}

function printNode(value) {
  console.log(value);
}
//Tests

var tree = new binarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);


console.log(tree.search(13));
console.log(tree.search(16));

console.log('min..:', tree.min());
console.log('max..:', tree.max());

// tree.inOrderTraverse(printNode);
tree.preOrderTraverse(printNode);