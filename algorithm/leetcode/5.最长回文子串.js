/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (32.38%)
 * Likes:    3002
 * Dislikes: 0
 * Total Accepted:    437.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */


// @lc code=start
/**
 * 动态规划： dp[i][j]代表i-j的回文字符串
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    let n = s.length
    if (n < 2) {
        return s
    }
    // 为什么要fill一下（因为初始化的空数组虽然长度为n, 但是此时都是empty, 无法使用map等迭代器遍历）
    let dp = new Array(n).fill().map(() => new Array(n))
    for (let i = 0; i < n; i++) {
        dp[i][i] = true
    }
    let res = ''
    let start = 0
    let maxLen = 1
    for (let j = 1; j < s.length; j++) {
        // i < j 这个条件是关键，说明是矩形上半区的，
        // 另外有这个条件，我们总是可以推出 dp[i + 1][j - 1]的值
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }

            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                start = i
            }
        }
    }
    return s.substring(start, start + maxLen)
}
//  // 暴力破解法
// var longestPalindrome = function (s) {
//     let res = ''
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             let temp = s.slice(i, j + 1)
//             if (judge(temp) && temp.length > res.length) {
//                 res = temp
//             }
//         }
//     }
//     return res
// };
// function judge(s) {
//     if (s.length <= 1) {
//         return true
//     }
//     let i = 0
//     let j = s.length - 1
//     while (i < j) {
//         if (s[i] !== s[j]) {
//             return false
//         }
//         i++
//         j--
//     }
//     return true
// }
// @lc code=end

