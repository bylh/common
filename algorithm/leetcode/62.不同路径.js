/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 *
 * https://leetcode-cn.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (60.99%)
 * Likes:    595
 * Dislikes: 0
 * Total Accepted:    118.3K
 * Total Submissions: 194K
 * Testcase Example:  '3\n2'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 *
 * 问总共有多少条不同的路径？
 *
 *
 *
 * 例如，上图是一个7 x 3 的网格。有多少可能的路径？
 *
 *
 *
 * 示例 1:
 *
 * 输入: m = 3, n = 2
 * 输出: 3
 * 解释:
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向右 -> 向下
 * 2. 向右 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向右
 *
 *
 * 示例 2:
 *
 * 输入: m = 7, n = 3
 * 输出: 28
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= m, n <= 100
 * 题目数据保证答案小于等于 2 * 10 ^ 9
 *
 *
 */
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//  递归实现
// 特别注意如果使用map去做，key的生成一定不能重复，比如'' + m + n，这种是错误的
// 因为2 12和21 2生成的是一样的key,应该使用m + '-' + 'n'这种去做
// var a = new Array(101)
// for (let i = 0; i < a.length; i++) {
//   a[i] = new Array(101)
// }
// var uniquePaths = function (m, n) {
//   if (m <= 0 || n <= 0) return 0
//   if (m <= 1 || n <= 1) return 1

//   if (a[m][n] > 0) {
//     return a[m][n]
//   }
//   let mCache = uniquePaths(m - 1, n)
//   a[m - 1][n] = mCache
//   let nCache = uniquePaths(m, n - 1)
//   a[m][n - 1] = nCache

//   a[m][n] = mCache + nCache
//   return a[m][n]
// }

// 动态规划实现
function uniquePaths(m, n) {
  const a = new Array(m)
  for (let i = 0; i < a.length; i++) {
    a[i] = new Array(n)
  }
  let result = 0;
  for (let i = 0; i < m; i ++) {
      for (let j = 0; j < n; j ++) {
          if (i <= 0 || j <= 0) {
              a[i][j] = 1;
          }  else {
            a[i][j] = a[i - 1][j] + a[i][j - 1]
          }
          console.log(i, j, a[i][j])
          result = a[i][j]
      }
  }
  return result
}

// @lc code=end
