/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (31.64%)
 * Likes:    653
 * Dislikes: 0
 * Total Accepted:    140K
 * Total Submissions: 441.4K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *
 * 假设一个二叉搜索树具有如下特征：
 *
 *
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 * 示例 1:
 *
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// var isValidBST = function (root) {
//     return vaildHelper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
// }
// const vaildHelper = (root, min, max) => {
//     if (root == null) {
//         return true
//     }
//     if (root.val <= min || root.val >= max) {
//         return false
//     }
//     return (
//         vaildHelper(root.left, min, root.val) &&
//         vaildHelper(root.right, root.val, max)
//     )
// }
var isValidBST = function(root) {
    if (root == null) {
        return true
    }
    let stack = []
    // let result = []
    let currentVal = Number.MIN_SAFE_INTEGER
    // 非递归中序遍历
    while(root != null || stack.length > 0) {
        while (root != null) {
            stack.push(root)
            root = root.left
        }
        let node = stack.pop()
        if (node) {
            if (currentVal >= node.val) {
                return false
            }
            currentVal = node.val;
            // result.push(node.val)
        }
        root = node.right
    }
    return true
}
// @lc code=end
