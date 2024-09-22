class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function mirror(root) {
  if (root === null) {
    return;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const curr = queue.shift();
    [curr.left, curr.right] = [curr.right, curr.left];
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
}

function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  process.stdout.write(root.data + " ");
  inOrder(root.right);
}

function preOrder(root) {
  if (root === null) return;
  process.stdout.write(root.data + " ");
  preOrder(root.left);
  preOrder(root.right);
}

function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  process.stdout.write(root.data + " ");
}

// Driver Code
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
mirror(root);
console.log("\nafter Inorder of the mirror is ");
inOrder(root);

// PRE ORDER: TLR (Top(Root), Left, Right )
// IN ORDER:  LTR (Left, Top(Root), Right)
// POST ORDER: LRT (Left, Right, Top(Root))
console.log("\nafter preorder of the mirror is ");
preOrder(root);
console.log("\nafter postorder of the mirror is ");
postOrder(root);