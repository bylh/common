//给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
//
//
//
// 示例：
//二叉树：[3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其层次遍历结果：
//
// [
//  [3],
//  [9,20],
//  [15,7]
//]
//
// Related Topics 树 广度优先搜索


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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) {
        return [];
    }
    let res = [];
    let curArr = [root];
    // 每次记录两层， 第一层的数据以数组形式push到结果数组，第二层数据为遍历做准备
    while (curArr.length > 0) {
        let secArr = [];
        let dataArr = [];
        for (let node of curArr) {
            dataArr.push(node.val)
            if (node.left) {
                secArr.push(node.left)
            }
            if (node.right) {
                secArr.push(node.right);
            }
        }
        curArr = secArr;
        res.push(dataArr);
    }
    return res;
};
//leetcode submit region end(Prohibit modification and deletion)
