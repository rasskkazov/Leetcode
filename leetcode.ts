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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;

  if (!p || !q) return null;
  if (p.val > q.val) {
    const temp = q;
    q = p;
    p = temp;
  }
  let left: TreeNode | null = null;
  let right: TreeNode | null = null;

  if (root.val === p.val) {
    left = root;
  } else if (root.val === q.val) {
    right = root;
  } else {
    left = lowestCommonAncestor(root.left, p, q);
    right = lowestCommonAncestor(root.right, p, q);
  }

  if (left && !right) {
    right = lowestCommonAncestor(left.right, p, q);
    if (right) return left;
  } else if (!left && right) {
    left = lowestCommonAncestor(right.left, p, q);
    if (left) return right;
  }

  return left && right ? root : left || right;
}
