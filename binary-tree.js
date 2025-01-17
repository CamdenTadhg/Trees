/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    function minDepthHelper(node){
      let lheight, rheight;
      if (node === null){
        return 0;
      } else {
        lheight = minDepthHelper(node.left);
        rheight = minDepthHelper(node.right);
      }

      if (lheight < rheight){
        return (lheight + 1);
      } else {
        return (rheight + 1);
      }
    }    
    const depth = minDepthHelper(this.root);
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    function maxDepthHelper(node){
      let lheight, rheight;
      if (node === null){
        return 0;
      } else {
        lheight = maxDepthHelper(node.left);
        rheight = maxDepthHelper(node.right);
      }
      if (lheight > rheight){
        return (lheight + 1);
      } else {
        return (rheight + 1);
      }
    }
    const depth = maxDepthHelper(this.root);
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(){
    let result = 0;
    function maxSumHelper(node){
      if (node === null){
        return 0;
      }
      const leftMax = maxSumHelper(node.left);
      const rightMax = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftMax + rightMax);
      return Math.max(0, node.val + leftMax, node.val + rightMax);
    }
    maxSumHelper(this.root);
    return result;
  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let next = Infinity;
    function nextLargerHelper(node){
      if (!node) return null;
      if (node.val > lowerBound){
        if (node.val < next){
          next = node.val;
        }
      }
      nextLargerHelper(node.left);
      nextLargerHelper(node.right);
    }
    nextLargerHelper(this.root);
    if (next === Infinity){
      next = null;
    }
    return next;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  // /** Further study!
  //  * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  // /** Further study!
  //  * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  // /** Further study!
  //  * lowestCommonAncestor(node1, node2): find the lowest common ancestor
  //  * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
