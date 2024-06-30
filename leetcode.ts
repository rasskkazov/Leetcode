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

function rightSideView(root: TreeNode | null): number[] {
  let res: number[] = [];

  const coveredLevels = new Set<number>();
  let level = 0;

  function traverse(root: TreeNode | null) {
    if (!root) {
      level--;
      return 0;
    }

    if (!coveredLevels.has(level)) {
      coveredLevels.add(level);
      res.push(root.val);
    }

    if (!root.left && !root.right) {
      level--;
      return 0;
    }

    level++;
    traverse(root.right);
    level++;
    traverse(root.left);

    level--;
    return 0;
  }

  traverse(root);
  return res;
}
