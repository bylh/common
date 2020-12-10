/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 *
 * https://leetcode-cn.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (66.12%)
 * Likes:    178
 * Dislikes: 0
 * Total Accepted:    94.9K
 * Total Submissions: 143.4K
 * Testcase Example:  '2'
 *
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * 
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 
 * 
 * 给定 N，计算 F(N)。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * 
 * 示例 2：
 * 
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * 
 * 示例 3：
 * 
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 ≤ N ≤ 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 普通递归解决（这样会有重复计算的问题）
// var fib = function(N) {
//     if (N <= 1) {
//         return N
//     }
//     return fib(N - 1) + fib(N - 2)
// };

// // 递归缓存方案
// var fib = function (N) {
//     const map = new Map()
//     map.set(0, 0)
//     map.set(1, 1)
//     const recursive = (n) => {
//         let sum = map.get(n)
//         if (sum != null) {
//             return sum
//         }
//         sum = recursive(n - 1) + recursive(n - 2)
//         map.set(n, sum)
//         return sum
//     }
//     return recursive(N)
// };

// 一次向上的方案
// var fib = function(N) {
//     if (N <= 1) {
//         return N
//     }
//     const arr = new Array(N)
//     arr[0] = 0;
//     arr[1] = 1
//     for (let i = 2; i < N + 1; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     return arr[N]
// };
var fib = function(N) {
    if (N <= 1) {
        return N
    }
    let current = 0
    let n1 = 1
    let n2 = 0
    for (let i = 2; i <= N; i++) {
        current = n1 + n2
        n2 = n1
        n1 = current
    }
    return current
};
// @lc code=end

