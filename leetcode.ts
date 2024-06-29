class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  let treeLevel = 0;

  function traverse(root: TreeNode | null) {
    if (!root) {
      treeLevel--;
      return 0;
    }

    if (!(res[treeLevel] instanceof Array)) {
      res.push([]);
    }
    res[treeLevel].push(root.val);

    if (!root.left && !root.right) {
      treeLevel--;
      return 0;
    }

    treeLevel++;
    traverse(root.left);
    treeLevel++;
    traverse(root.right);
    treeLevel--;
    return 0;
  }

  traverse(root);
  return res;
}
