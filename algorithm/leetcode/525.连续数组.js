/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 *
 * https://leetcode-cn.com/problems/contiguous-array/description/
 *
 * algorithms
 * Medium (44.05%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    8.2K
 * Total Submissions: 18.6K
 * Testcase Example:  '[0,1]'
 *
 * 给定一个二进制数组, 找到含有相同数量的 0 和 1 的最长连续子数组（的长度）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [0,1]
 * 输出: 2
 * 说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
 * 
 * 示例 2:
 * 
 * 输入: [0,1,0]
 * 输出: 2
 * 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
 * 
 * 
 * 
 * 注意: 给定的二进制数组的长度不会超过50000。
 * 
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力破解超时
// var findMaxLength = function (nums) {
//     let maxLen = 0
//     for (let start = 0; start < nums.length; start++) {
//         let zeroes = 0, ones = 0
//         for (let end = start; end < nums.length; end++) {
//             if (nums[end] === 0) {
//                 zeroes++
//             } else {
//                 ones++
//             }
//             if (zeroes === ones) {
//                 maxLen = Math.max(maxLen, end - start + 1)
//             }
//         }
//     }
//     return maxLen
// };

var findMaxLength = function (nums) {
    const map = new Map()
    let maxLen = 0, count = 0
    map.set(0, -1)
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 0 ? -1 : 1
        if (map.has(count)) {
            maxLen = Math.max(maxLen, i - map.get(count))
        } else {
            map.set(count, i)
        }
    }
    return maxLen
};

// @lc code=end

