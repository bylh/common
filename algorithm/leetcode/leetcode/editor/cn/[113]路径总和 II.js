//给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
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
//         /  \    / \
//        7    2  5   1
//
//
// 返回:
//
// [
//   [5,4,11,2],
//   [5,8,4,5]
//]
//
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return [];
    }
    let newSum = sum - root.val;
    // 当是叶子节点的时候返回包裹叶子节点的二维数组
    if (!root.left && !root.right && newSum === 0) {
        return [[root.val]]
    }
    let leftArr = pathSum(root.left, newSum); // 左子树的二维数组
    let rightArr = pathSum(root.right, newSum); // 右子树的二维数组
    if (leftArr.length > 0) { // 长度大于零说明左子树符合有符合条件的路径
        for(let arr of leftArr) {
            // 二维数组中可能有多个一维数组，其每一个一维数组都是符合条件的，所以在路径上要都把父节点加进来
            arr.unshift(root.val);
        }
    }
    if (rightArr.length > 0) { // 长度大于零说明右子树有符合条件的路径
        for(let arr of rightArr) {
            arr.unshift(root.val);
        }
    }
    return [...leftArr, ...rightArr]
};
//leetcode submit region end(Prohibit modification and deletion)
