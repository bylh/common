/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (36.88%)
 * Likes:    623
 * Dislikes: 0
 * Total Accepted:    69.3K
 * Total Submissions: 188.1K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 *
 * 示例:
 *
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 *
 *
 * 说明:
 *
 * 假设你总是可以到达数组的最后一个位置。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 0 || nums.length === 1 || nums[0] === 0) {
    return 0
  }
  let step = 1
  let i = 0
  while (i < nums.length - 2) {
    let maxIndex = i + nums[i]
    if (maxIndex >= nums.length - 1) {
        return step
    }
    let select = 1;
    for (let j = 1; j <= nums[i]; j ++) {
        let index = i + j + nums[i + j]
        if (index >= nums.length - 1) {
            return step + 1;
        }
        if (index > maxIndex) {
            maxIndex = index;
            select = j;
        }
    }
    i += select;
    step += 1
  }
  return step
}
// @lc code=end
