//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
//
// 示例:
//
// 输入: [-2,1,-3,4,-1,2,1,-5,4],
//输出: 6
//解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
//
//
// 进阶:
//
// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
// Related Topics 数组 分治算法 动态规划


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
// -1 -1 -2 -2
/* ----------------------------分治（zhi）算法 ------------------------------- */
// 分治法：将一个问题拆分成多个相似的小问题，并对其分别求解，如果拆出的问题依然复杂，
//就通过递归调用再次将子问题拆分，直到拆出的方法可以以简单方式求得解，最后合并多个小问题的解，就是原问题的结果
var maxSubArray = function(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return 0;
    }
    let len = nums.length;
    if (len === 1) {
        return nums[0];
    }


    let center = parseInt(len / 2);
    // 左半边最大值
    let leftBorderSum = maxLeftBorderSum = nums[center - 1];
    for (i = center-2; i >= 0; i--) {
        leftBorderSum += nums[i];
        maxLeftBorderSum = Math.max(leftBorderSum, maxLeftBorderSum);
    }
    // 右半边最大值
    let rightBorderSum = maxRightBorderSum = nums[center];
    for (i = center + 1; i < len; i++) {
        rightBorderSum += nums[i];
        maxRightBorderSum = Math.max(rightBorderSum, maxRightBorderSum);
    }
    return Math.max((maxLeftBorderSum + maxRightBorderSum), maxSubArray(nums.slice(0, center)), maxSubArray(nums.slice(center, len)));
};

/* ----------------------------贪心算法（属于动态规划的一种形式） ------------------------------- */
// var maxSubArray1 = function(nums) {
//     if (!Array.isArray(nums) || nums.length === 0) {
//         return 0;
//     }
//     // 初始当前最大值和最大值都是数组第一项
//     let cur_sum = nums[0];
//     let max_sum = cur_sum;
//
//     for(let i = 1; i < nums.length; i++) {
//         /* 当前值为num[i]，之前与他紧紧连着的子序列和如果是正的，即相加大于其自身，则自身也加入这个子序列
//         否则用自身取代之前的连续子序列，成为新的子序列
//         其实cur_sum指的是当前连续子序列的合，而max_sum记录的是cur_sum所表示过的最大的那一个
//         * */
//         cur_sum = Math.max(nums[i], cur_sum + nums[i]);
//
//         max_sum = Math.max(max_sum, cur_sum);
//     }
//     return max_sum;
// };
//leetcode submit region end(Prohibit modification and deletion)
