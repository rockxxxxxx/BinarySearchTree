class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

var root = null;
function iterativePreorder(node) {
  if (node == null) {
    return;
  }

  var nodeStack = [];
  nodeStack.push(root);
  while (nodeStack.length > 0) {
    var mynode = nodeStack[nodeStack.length - 1];
    document.write(mynode.data + " ");
    nodeStack.pop();
    if (mynode.right != null) {
      nodeStack.push(mynode.right);
    }
    if (mynode.left != null) {
      nodeStack.push(mynode.left);
    }
  }
}

root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

iterativePreorder(root);
