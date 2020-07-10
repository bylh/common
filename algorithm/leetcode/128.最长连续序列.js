/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode-cn.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Hard (51.25%)
 * Likes:    453
 * Dislikes: 0
 * Total Accepted:    65.1K
 * Total Submissions: 126.9K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组，找出最长连续序列的长度。
 *
 * 要求算法的时间复杂度为 O(n)。
 *
 * 示例:
 *
 * 输入: [100, 4, 200, 1, 3, 2]
 * 输出: 4
 * 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = new Map()
  let maxLen = 0
  for (n of nums) {
    if (!map.get(n)) {
      left = map.get(n - 1) || 0
      right = map.get(n + 1) || 0
      len = left + right + 1
      map.set(n, len)
      map.set(n - left, len)
      map.set(n + right, len)
      maxLen = Math.max(len, maxLen)
    }
  }
  return maxLen
}
// @lc code=end
