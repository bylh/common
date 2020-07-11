/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 *
 * https://leetcode-cn.com/problems/maximum-gap/description/
 *
 * algorithms
 * Hard (55.22%)
 * Likes:    172
 * Dislikes: 0
 * Total Accepted:    16.1K
 * Total Submissions: 29.2K
 * Testcase Example:  '[3,6,9,1]'
 *
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 *
 * 如果数组元素个数小于 2，则返回 0。
 *
 * 示例 1:
 *
 * 输入: [3,6,9,1]
 * 输出: 3
 * 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
 *
 * 示例 2:
 *
 * 输入: [10]
 * 输出: 0
 * 解释: 数组元素个数小于 2，因此返回 0。
 *
 * 说明:
 *
 *
 * 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
 * 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序后比较，其实不符合题目要求，应该使用桶排序，基数排序等
// var maximumGap = function(nums) {
//     if (nums.length <= 1) {
//         return 0
//     }
//    nums.sort((a, b) => a - b)
//    let max = 0;
//    for (let i = 0; i < nums.length - 1; i ++) {
//        max = Math.max(nums[i + 1] - nums[i], max)
//    }
//    return max;
// };

// 鸽笼原理
var maximumGap = function (nums) {
  if (nums.length <= 1) {
    return 0
  }
  let max = Math.max(...nums)
  let min = Math.min(...nums)
  let bucketSize = Math.ceil((max - min) / (nums.length - 1)) || 1
  let bucketArr = new Array(Math.floor((max - min) / bucketSize) + 1)
  for (let num of nums) {
    let bucketIndex = Math.floor((num - min) / bucketSize)
    if (!bucketArr[bucketIndex]) {
      bucketArr[bucketIndex] = {
        min: num,
        max: num,
      }
    }
    bucketArr[bucketIndex].min = Math.min(bucketArr[bucketIndex].min, num)
    bucketArr[bucketIndex].max = Math.max(bucketArr[bucketIndex].max, num)
  }
  let maxGap = 0
  let pre = bucketArr[0] // pre初始肯定不为零的，因为是从nums的最小值开始的，最大值结束的
  // 其实第一个桶和最后一个桶必然是有数据的
  for (let i = 1; i < bucketArr.length; i++) {
    if (bucketArr[i]) { // 此处也保证了pre 不为null
      maxGap = Math.max(maxGap, bucketArr[i].min - pre.max)
      pre = bucketArr[i]
    }
  }
  return maxGap
}
// @lc code=end
