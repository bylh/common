/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (69.40%)
 * Likes:    416
 * Dislikes: 0
 * Total Accepted:    50.2K
 * Total Submissions: 72.2K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给定一个二叉树，原地将它展开为一个单链表。
 *
 *
 *
 * 例如，给定二叉树
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \   \
 * 3   4   6
 *
 * 将其展开为：
 *
 * 1
 * ⁠\
 * ⁠ 2
 * ⁠  \
 * ⁠   3
 * ⁠    \
 * ⁠     4
 * ⁠      \
 * ⁠       5
 * ⁠        \
 * ⁠         6
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
    let current = root
    let stack = []
    let pre  = current
    while (current != null || stack.length > 0) {
        while (current != null) {
            if (current.right) {
                stack.push(current.right)
            }
            current.right = current.left
            current.left = null
            pre = current
            current = current.right
        }
        let node = stack.pop()
        pre.right = node;
        current = node
    }
}
// @lc code=end
