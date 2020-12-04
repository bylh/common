/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (45.49%)
 * Likes:    1195
 * Dislikes: 0
 * Total Accepted:    175.2K
 * Total Submissions: 383.3K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 示例:
 * 
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4 
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * 
 * 说明:
 * 
 * 
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n^2) 。
 * 
 * 
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// TODO 递归有问题
// const arr = [1, 3, 6, 7, 9, 4, 10, 5, 6]

// var lengthOfLIS = function (nums) {
//     return recursive(nums, 1)
// };
// function recursive(nums, i) {
//     let len = 1
//     for (let j = 0; j < i; j++) {
//         if (nums[i] > nums[j]) {
//             len = Math.max(recursive(nums, j) + 1, len)
//         }
//     }
//     return len
// }
// console.log(lengthOfLIS(arr))

// 动态规划
const lengthOfLIS = (nums) => {
    let n = nums.length
    if (!n) {
        return 0
    }
    let dp = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}

// @lc code=end

