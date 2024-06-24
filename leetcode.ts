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

function isBalanced(root: TreeNode | null): boolean {
  let res = true;

  function dfs(root: TreeNode | null) {
    if (!res) return 0;
    if (!root) return 0;
    if (!root.left && !root.right) return 1;

    const left = dfs(root.left);
    const right = dfs(root.right);

    if (Math.abs(left - right) > 1) res = false;

    return Math.max(left, right) + 1;
  }

  dfs(root);

  return res;
}
