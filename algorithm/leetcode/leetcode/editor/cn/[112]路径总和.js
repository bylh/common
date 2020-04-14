//给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例:
//给定如下二叉树，以及目标和 sum = 22，
//
//               5
//             / \
//            4   8
//           /   / \
//          11  13  4
//         /  \      \
//        7    2      1
//
//
// 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
// Related Topics 树 深度优先搜索


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) { // 注意节点值可能是正可能是负，所以不能通过单个节点的值与sum作比较
        return false;
    }
    // 成立的条件只有当是叶子节点并且其数值等于sum, 注意递归过程中一直递减的sum,其实深度优先遍历到对应的每一层时其sum就对应节点及以下的和
    let newSum = sum - root.val;
    if (!root.left && !root.right) {
        return newSum === 0;
    }
    return hasPathSum(root.left, newSum) || hasPathSum(root.right, newSum);
};
//leetcode submit region end(Prohibit modification and deletion)
