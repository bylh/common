//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//
// 注意：给定 n 是一个正整数。
//
// 示例 1：
//
// 输入： 2
//输出： 2
//解释： 有两种方法可以爬到楼顶。
//1.  1 阶 + 1 阶
//2.  2 阶
//
// 示例 2：
//
// 输入： 3
//输出： 3
//解释： 有三种方法可以爬到楼顶。
//1.  1 阶 + 1 阶 + 1 阶
//2.  1 阶 + 2 阶
//3.  2 阶 + 1 阶
//
// Related Topics 动态规划


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 * 思路： 假如有n阶台阶全部走完需要f(n)，要走完，第一步肯定是上1阶或者2阶，假如第一步上了1阶，剩余f(n-1), 假如第一步上了两阶
 * 剩余f(n-2), 只要这两种情况， 所以得出f(n) = f(n-1) + f(n-2)
 */
// var climbStairs = function(n) {
//     // 最暴力方法，O(2^n)树路径，比较大的时候内存会爆
//     // if (n === 1 || n === 2) {
//     //     return n;
//     // }
//     // return climbStairs(n - 1) + climbStairs(n-2);
// };

// var climbStairs = function(n) {
//     cb = climb();
//     return cb(n);
// };
//
// function climb(){
//     let cache = {};
//     return function cb(n){
//         if (n in cache) {
//             return cache[n]
//         } else {
//             if(n <= 2) {return n}
//             cache[n] = cb(n-1)+cb(n-2)
//             return cache[n]
//         }
//     }
// }
// f(n) = f(n - 1) + f(n - 2);

function climbStairs(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    let sum1 = 1, sum2 = 2;
    let sum = 0;
    for (let i = 3; i <= n; i++) {
        sum = sum1 + sum2;
        sum1 = sum2;
        sum2 = sum;
    }
    return sum;
}
//leetcode submit region end(Prohibit modification and deletion)
