/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (64.35%)
 * Likes:    455
 * Dislikes: 0
 * Total Accepted:    121.3K
 * Total Submissions: 188.8K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// TODO 去重效率低，待剪枝优化
var combinationSum2 = function (candidates, target) {
    const ans = []
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length + 1) {
            return
        }
        if (target === 0) {
            // ans中如果包含了combine, 那么ans中必定有一项长度和combine一样，
            // 并且包含元素也一样，这里不管顺序，即[1, 2, 3]和[3, 2, 1]鉴定为相同的

            if (ans.some(arr => arr.length === combine.length
                && arr.every(item => combine.indexOf(item) !== -1)
                && combine.every(item => arr.indexOf(item) !== -1))) {
                    // 重复了，所以什么都不做
            } else {
                ans.push(combine)
            }
            return
        }
        // 两种情况

        // 1、直接跳过
        dfs(target, combine, idx + 1)
        // 2、当前重复继续
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx + 1)
        }
    }
    dfs(target, [], 0)
    return ans
};
// arr = [10, 1, 2, 7, 6, 1, 5]
// console.log(combinationSum2(arr, 8))
// @lc code=end

