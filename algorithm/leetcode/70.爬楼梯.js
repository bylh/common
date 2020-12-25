/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (50.89%)
 * Likes:    1378
 * Dislikes: 0
 * Total Accepted:    333.4K
 * Total Submissions: 653.3K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     if (n <= 2) {
//         return n
//     }
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };
// var climbStairs = function(n) {
//     if (n <= 2) {
//         return n
//     }
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };
// TODO 有问题

var climbStairs = function(n) {
    const fib = (n, map = new Map([[1, 1], [2, 2]])) => {
        if (map.has(n)) {
            return map.get(n)
        }
        let sum = fib(n - 1, map) + fib(n - 2, map)
        map.set(n, sum)
        return sum
    }
    return fib(n)
};


// var climbStairs = function(n) {
//     // 尾递归优化
//     const fib = (n, a = 1, b = 2) => {
//         if (n <= 1) {
//             return a
//         }
//         return fib(n - 1, b, a + b)
//     }
//     return fib(n)
// };
// @lc code=end

