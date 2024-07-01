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

function goodNodes(root: TreeNode | null): number {
  let res = 0;
  let curPath: number[] = [];

  function bypass(root: TreeNode | null) {
    if (!root) return 0;

    curPath.push(root.val);
    if (Math.max(...curPath) === root.val) res++;
    if (!root.left && !root.right) {
      curPath.pop();
      return 0;
    }

    bypass(root.left);
    bypass(root.right);
    curPath.pop();
    return 0;
  }
  bypass(root);
  return res;
}
