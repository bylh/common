/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (76.99%)
 * Likes:    991
 * Dislikes: 0
 * Total Accepted:    217.9K
 * Total Submissions: 282.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = (nums) => {
    // 1. 设置结果集
    const result = [];

    // 2. 回溯
    const recursion = (path, set) => {
        // 2.1 设置回溯终止条件
        if (path.length === nums.length) {

            // 2.1.1 推入结果集
            result.push(path.concat());

            // 2.1.2 终止递归
            return;
        }

        // 2.2 遍历数组
        for (let i = 0; i < nums.length; i++) {

            // 2.2.1 必须是不存在 set 中的坐标
            if (!set.has(i)) {

                // 2.2.2 本地递归条件（用完记得删除）
                path.push(nums[i]);
                set.add(i);
                // 2.2.3 进一步递归
                recursion(path, set);
                // 2.2.4 回溯：撤回 2.2.2 的操作
                path.pop();
                set.delete(i);
            }
        }
    };
    recursion([], new Set());

    // 3. 返回结果
    return result;
};
// @lc code=end

