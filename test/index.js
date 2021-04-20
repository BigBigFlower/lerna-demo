function add (a, b) {
  return a + b
}

const isBalanced = function (root) {
  let flag = true
  function dfs (root) {
    // 如果是空树，高度即为0；如果flag已经为false，就没有必要往下走了，直接return
    if (!root || !flag) {
      return 0
    }
    // 计算左右子树的高度
    let left = dfs(root.left)
    let right = dfs(root.right)
    if (Math.abs(left - right) > 1) {
      flag = false
      return 0
    }
    // 返回当前子树的高度
    return Math.max(left, right) + 1
  }
  dfs(root)
  return flag
}
const balanceBST = function (root) {
  let arr = []
  // 中序遍历
  function inOrder (root) {
    if (!root) return
		if (root.left) inOrder(root.left)
    arr.push(root.val)
    if (root.right) inOrder(root.right) 
  }
  // 构造平衡二叉树
  function buildAVL (low, high) {
    if (low > high) return null
    
    const mid = Math.floor(low + (high - low) / 2)
    // 创建当前节点
    let cur = new TreeNode(arr[mid])
    // 构建左子树
    cur.left = buildAVL(low, mid - 1)
    // 构建右子树
    cur.high = buildAVL(mid + 1, high)
   	return cur 
  }
  
  inOrder(root)
  return buildBST(0, arr.length - 1)
}