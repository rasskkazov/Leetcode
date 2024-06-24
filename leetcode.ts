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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;

  function dfs(root: TreeNode | null) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;

    const left = dfs(root.left);
    const right = dfs(root.right);

    max = Math.max(left + right, max);

    return Math.max(left, right) + 1;
  }
  dfs(root);
  return max;
}
