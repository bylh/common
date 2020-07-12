/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (39.86%)
 * Likes:    655
 * Dislikes: 0
 * Total Accepted:    78.9K
 * Total Submissions: 197.9K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 *
 *
 * 示例 2:
 *
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) {
    return null
  }
  if (nums.length === 1) {
    return nums[0]
  }

  let ans = nums[0]
  let maxF = nums[0]
  let minF = nums[0]
  for (let i = 1; i < nums.length; i++) {
    mx = maxF
    mn = minF
    maxF = Math.max(mx * nums[i], nums[i], mn * nums[i])
    minF = Math.min(mn * nums[i], nums[i], mx * nums[i])
    ans = Math.max(ans, maxF)
  }
  return ans
}
console.log(maxProduct([2, -5, -2, -4, 3]))
// @lc code=end
