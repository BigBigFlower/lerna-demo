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