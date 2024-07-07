/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let sum = this.root.val;
    function sumChildren(node){
      //does the node have children?
      if (node.children){
        for (let child of node.children){
          //if so, add them to sum. 
          sum = sum + child.val
          //run child through sum
          sumChildren(child);
        }
      }
    }
    sumChildren(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let count = this.root.val % 2 === 0 ? 1 : 0;
    function countChildren(node){
      for (let child of node.children){
        if (child.val % 2 === 0){
          count++;
        }
        if (child.children){
          countChildren(child);
        }
      }
    }
    countChildren(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = this.root.val > lowerBound ? 1 : 0;
    function compareChildren(node){
      for (let child of node.children){
        if (child.val > lowerBound){
          count++;
        }
        if (child.children){
          compareChildren(child);
        }
      }
    }
    compareChildren(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };


//write maxSum method
  // try to code it yourself (again)
  // this weekend is the last time for this. If you haven't gotten it by Sunday, give it up for now

//write areCousins method
//implement serialization & deserialization methods on Binary Tree class
//write lowestCommonAncestor method
//write pathSum method
//write pathSum2 method
//write getElementById method
//write getElementsByTagName method
//write get ElementsByClassName method