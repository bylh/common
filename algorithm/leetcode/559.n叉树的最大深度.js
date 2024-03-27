/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/description/
 *
 * algorithms
 * Easy (69.76%)
 * Likes:    97
 * Dislikes: 0
 * Total Accepted:    26.6K
 * Total Submissions: 38.1K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，找到其最大深度。
 *
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 *
 * 例如，给定一个 3叉树 :
 *
 *
 *
 *
 *
 *
 *
 * 我们应返回其最大深度，3。
 *
 * 说明:
 *
 *
 * 树的深度不会超过 1000。
 * 树的节点总不会超过 5000。
 *
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
      return 0
    }
    if (!Array.isArray(root.children)) {
      return 1
    }
    let maxDep = 0
    for (let node of root.children) {
      maxDep = Math.max(maxDepth(node), maxDep)
    }
    return maxDep + 1
  }
  // @lc code=end
  