/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (29.71%)
 * Likes:    2750
 * Dislikes: 0
 * Total Accepted:    363.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
      return [];
    }
    // 从小到大排序
    const arr = nums.sort((a,b) => a-b);
    // 最小值大于 0 或者 最大值小于 0，说明没有无效答案
    if (arr[0] > 0 || arr[arr.length - 1] < 0) {
      return [];
    }
    const n = arr.length;
    const res = [];
    for (let i = 0; i < n; i ++) {
      // 如果当前值大于 0，和右侧的值再怎么加也不会等于 0，所以直接退出
      if (nums[i] > 0) {
        return res;
      }
      // 当前循环的值和上次循环的一样，就跳过，避免重复值
      if (i > 0 && arr[i] === arr[i - 1]) {
        continue;
      }
      // 双指针
      let l = i + 1;
      let r = n - 1;
      while(l < r) {
        const temp = arr[i] + arr[l] + arr[r];
        if (temp > 0) {
          r --;
        }
        if (temp < 0) {
          l ++;
        }
        if (temp === 0) {
          res.push([nums[i], nums[l], nums[r]]);
          // 跳过重复值
          while(l < r && nums[l] === nums[l + 1]) {
            l ++;
          }
          // 同上
          while(l < r && nums[r] === nums[r - 1]) {
            r --;
          }
          l ++;
          r --;
        }
      }
    }
    return res;
  };
// @lc code=end

