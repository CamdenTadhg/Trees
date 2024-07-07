const { BinaryTree, BinaryTreeNode } = require("./binary-tree");

let smallTree;
let largeTree;
let emptyTree;
let complexTree;

beforeEach(function() {
  emptyTree = new BinaryTree();

  // build small tree;
  let smallLeft = new BinaryTreeNode(5);
  let smallRight = new BinaryTreeNode(5);
  let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
  smallTree = new BinaryTree(smallRoot);

  // build large tree
  let node6 = new BinaryTreeNode(1);
  let node5 = new BinaryTreeNode(1);
  let node4 = new BinaryTreeNode(2);
  let node3 = new BinaryTreeNode(3, node4, node6);
  let node2 = new BinaryTreeNode(5, node3, node5);
  let node1 = new BinaryTreeNode(5);
  let root = new BinaryTreeNode(6, node1, node2);
  largeTree = new BinaryTree(root);

  //build very complex tree
  let node18 = new BinaryTreeNode(2);
  let node17 = new BinaryTreeNode(5);
  let node16 = new BinaryTreeNode(3);
  let node15 = new BinaryTreeNode(0);
  let node14 = new BinaryTreeNode(1);
  let node13 = new BinaryTreeNode(9);
  let node12 = new BinaryTreeNode(8, null, node18);
  let node11 = new BinaryTreeNode(6);
  let node10 = new BinaryTreeNode(5);
  let node9 = new BinaryTreeNode(4, node16, node17);
  let node8 = new BinaryTreeNode(1);
  let node7 = new BinaryTreeNode(4, node14, node15);
  let node06 = new BinaryTreeNode(5, node12, node13);
  let node05 = new BinaryTreeNode(3, node10, node11);
  let node04 = new BinaryTreeNode(1, node8, node9);
  let node03 = new BinaryTreeNode(2, node06, node7);
  let node02 = new BinaryTreeNode(4, node04, node05);
  let node01 = new BinaryTreeNode(6, node02, node03);
  complexTree = new BinaryTree(node01);

  //build unbalanced tree
  let nodeE3 = new BinaryTreeNode(2);
  let nodeE2 = new BinaryTreeNode(5);
  let nodeE1 = new BinaryTreeNode(3);
  let nodeD8 = new BinaryTreeNode(0);
  let nodeD7 = new BinaryTreeNode(1);
  let nodeD6 = new BinaryTreeNode(100);
  let nodeD5 = new BinaryTreeNode(90, nodeE3);
  let nodeD4 = new BinaryTreeNode(6);
  let nodeD3 = new BinaryTreeNode(5);
  let nodeD2 = new BinaryTreeNode(4, nodeE1, nodeE2);
  let nodeD1 = new BinaryTreeNode(1);
  let nodeC4 = new BinaryTreeNode(4, nodeD7, nodeD8);
  let nodeC3 = new BinaryTreeNode(5, nodeD5, nodeD6);
  let nodeC2 = new BinaryTreeNode(3, nodeD3, nodeD4);
  let nodeC1 = new BinaryTreeNode(1, nodeD1, nodeD2);
  let nodeB2 = new BinaryTreeNode(2, nodeC3, nodeC4);
  let nodeB1 = new BinaryTreeNode(4, nodeC1, nodeC2);
  let nodeA = new BinaryTreeNode(6, nodeB1, nodeB2);
  wonkyTree = new BinaryTree(nodeA);

  //build edge case tree
  let nodeN1 = new BinaryTreeNode(88);
  let nodeM1 = new BinaryTreeNode(88, nodeN1);
  let nodeL1 = new BinaryTreeNode(88, nodeM1);
  let nodeK4 = new BinaryTreeNode(88, nodeL1);
  let nodeK3 = new BinaryTreeNode(2);
  let nodeK2 = new BinaryTreeNode(5);
  let nodeK1 = new BinaryTreeNode(3);
  let nodeJ8 = new BinaryTreeNode(0, nodeK4);
  let nodeJ7 = new BinaryTreeNode(1);
  let nodeJ6 = new BinaryTreeNode(100);
  let nodeJ5 = new BinaryTreeNode(90, null, nodeK3);
  let nodeJ4 = new BinaryTreeNode(6);
  let nodeJ3 = new BinaryTreeNode(5);
  let nodeJ2 = new BinaryTreeNode(4, nodeK1, nodeK2);
  let nodeJ1 = new BinaryTreeNode(1);
  let nodeI4 = new BinaryTreeNode(88, nodeJ7, nodeJ8);
  let nodeI3 = new BinaryTreeNode(5, nodeJ5, nodeJ6);
  let nodeI2 = new BinaryTreeNode(3, nodeJ3, nodeJ4);
  let nodeI1 = new BinaryTreeNode(1, nodeJ1, nodeJ2);
  let nodeH2 = new BinaryTreeNode(2, nodeI3, nodeI4);
  let nodeH1 = new BinaryTreeNode(89, nodeI1, nodeI2);
  let nodeG = new BinaryTreeNode(6, nodeH1, nodeH2);
  edgeTree = new BinaryTree(nodeG);
});

describe("minDepth", function() {
  it("handles simple trees", function() {
    expect(smallTree.minDepth()).toBe(2);
  });

  it("handles more complex trees", function() {
    expect(largeTree.minDepth()).toBe(2);
    expect(complexTree.minDepth()).toBe(4);
  });

  it("handles empty trees", function() {
    expect(emptyTree.minDepth()).toBe(0);
  });
});

describe("maxDepth", function() {
  it("handles simple trees", function() {
    expect(smallTree.maxDepth()).toBe(2);
  });

  it("handles more complex trees", function() {
    expect(largeTree.maxDepth()).toBe(4);
    expect(complexTree.maxDepth()).toBe(5);
  });

  it("handles empty trees", function() {
    expect(emptyTree.maxDepth()).toBe(0);
  });
});

describe("maxSum", function() {
  it("handles simple trees", function() {
    expect(smallTree.maxSum()).toBe(16);
  });

  it("handles empty trees", function() {
    expect(emptyTree.maxSum()).toBe(0);
  });

  it("handles more complex trees", function() {
    expect(largeTree.maxSum()).toBe(21);
    expect(complexTree.maxSum()).toBe(37);
  });

  it('handles edge cases', function() {
    expect(wonkyTree.maxSum()).toBe(197);
    expect(edgeTree.maxSum()).toBe(547);
  })

  it("handles negative values", function() {
    let node100 = new BinaryTreeNode(100);
    let node8 = new BinaryTreeNode(8);
    let nodeNeg4 = new BinaryTreeNode(-4);
    let node2 = new BinaryTreeNode(2, nodeNeg4);
    let nodeNeg3 = new BinaryTreeNode(-3, node8, node100);
    let root = new BinaryTreeNode(10, node2, nodeNeg3);
    let tree = new BinaryTree(root);

    expect(tree.maxSum()).toBe(109);
  });
});

describe("nextLarger", function() {
  it("handles simple trees", function() {
    expect(smallTree.nextLarger(4)).toBe(5);
    expect(smallTree.nextLarger(5)).toBe(6);
    expect(smallTree.nextLarger(6)).toBe(null);
  });

  it("handles empty trees", function() {
    expect(emptyTree.nextLarger(0)).toBe(null);
  });

  it("handles more complex trees", function() {
    expect(largeTree.nextLarger(1)).toBe(2);
    expect(largeTree.nextLarger(2)).toBe(3);
    expect(largeTree.nextLarger(3)).toBe(5);
    expect(largeTree.nextLarger(4)).toBe(5);
    expect(largeTree.nextLarger(5)).toBe(6);
    expect(largeTree.nextLarger(6)).toBe(null);
    expect(complexTree.nextLarger(2)).toBe(3);
    expect(complexTree.nextLarger(4)).toBe(5);
    expect(complexTree.nextLarger(6)).toBe(8);
    expect(edgeTree.nextLarger(87)).toBe(88);
  });
});

// describe("areCousins", function() {
//   it("returns true if they are cousins, false if not", function() {
//     let n7 = new BinaryTreeNode(7);
//     let n6 = new BinaryTreeNode(6);
//     let n5 = new BinaryTreeNode(5);
//     let n4 = new BinaryTreeNode(4);
//     let n3 = new BinaryTreeNode(3, n6, n7);
//     let n2 = new BinaryTreeNode(2, n4, n5);
//     let root = new BinaryTreeNode(1, n2, n3);
//     let tree = new BinaryTree(root);

//     expect(tree.areCousins(n4, n6)).toBe(true);
//     expect(tree.areCousins(n4, n7)).toBe(true);
//     expect(tree.areCousins(n5, n6)).toBe(true);
//     expect(tree.areCousins(n5, n7)).toBe(true);
//     expect(tree.areCousins(n2, n3)).toBe(false);
//     expect(tree.areCousins(n4, n5)).toBe(false);
//     expect(tree.areCousins(n6, n7)).toBe(false);
//     expect(tree.areCousins(n4, n3)).toBe(false);
//     expect(tree.areCousins(root, n3)).toBe(false);
//   });
// });

// describe("serialize and deserialize", function() {
//   let myTree;

//   beforeEach(function() {
//     let root = new BinaryTreeNode(1);
//     root.left = new BinaryTreeNode(2);
//     root.right = new BinaryTreeNode(3);
//     root.right.left = new BinaryTreeNode(4);
//     root.right.right = new BinaryTreeNode(5);

//     myTree = new BinaryTree(root);
//   });

//   it("serializes trees into strings", function() {
//     // Failure message:
//     // The 'serialize' function needs to output a string.

//     expect(typeof BinaryTree.serialize(myTree)).toBe("string");
//   });

//   it("deserializes strings into BinaryTree objects", function() {
//     // Failure message:
//     // The 'deserialize' function needs to output a BinaryTreeNode

//     let serialized = BinaryTree.serialize(myTree);
//     let result = BinaryTree.deserialize(serialized);
//     expect(result instanceof BinaryTree).toBe(true);
//   });

//   it("reverses one another", function() {
//     // Failure message:
//     // the function 'deserialize' should perfectly reverse the function 'serialize'

//     let serialized = BinaryTree.serialize(myTree);
//     let result = BinaryTree.deserialize(serialized);
//     expect(result).toEqual(myTree);
//   });

//   it("is a pure function", function() {
//     // Failure message:
//     // original tree must be unchanged

//     let root = new BinaryTreeNode(1);
//     root.left = new BinaryTreeNode(2);
//     root.right = new BinaryTreeNode(3);
//     root.right.left = new BinaryTreeNode(4);
//     root.right.right = new BinaryTreeNode(5);

//     myTreeCopy = new BinaryTree(root);

//     let serialized = BinaryTree.serialize(myTree);
//     BinaryTree.deserialize(serialized);

//     expect(myTree).toEqual(myTreeCopy);
//   });
// });

// describe("lowestCommonAncestor", function() {
//   it("returns the lowest common ancestor", function() {
//     // Failure message:
//     // failed for tree (same as test examples)
//     const root = new BinaryTreeNode(3);
//     const tree = new BinaryTree(root);

//     /* build left subtree */

//     const left = new BinaryTreeNode(5);
//     root.left = left;

//     const leftLeft = new BinaryTreeNode(6);
//     left.left = leftLeft;

//     const leftRight = new BinaryTreeNode(2);
//     left.right = leftRight;

//     const leftRightLeft = new BinaryTreeNode(7);
//     leftRight.left = leftRightLeft;

//     const leftRightRight = new BinaryTreeNode(4);
//     leftRight.right = leftRightRight;

//     /* build right subtree */

//     const right = new BinaryTreeNode(1);
//     root.right = right;

//     const right_left = new BinaryTreeNode(0);
//     right.left = right_left;

//     const right_right = new BinaryTreeNode(8);
//     right.right = right_right;

//     expect(tree.lowestCommonAncestor(left, right)).toBe(root);
//     expect(tree.lowestCommonAncestor(leftRight, leftRightLeft)).toBe(leftRight);
//     expect(tree.lowestCommonAncestor(leftRightLeft, leftLeft)).toBe(left);
//     expect(tree.lowestCommonAncestor(right_left, right_right)).toBe(right);
//   });
// });
