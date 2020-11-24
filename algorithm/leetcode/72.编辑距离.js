/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (60.03%)
 * Likes:    1263
 * Dislikes: 0
 * Total Accepted:    93.7K
 * Total Submissions: 156.1K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 
 * 你可以对一个单词进行如下三种操作：
 * 
 * 
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * word1 和 word2 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1.length
    const n = word2.length
    const cost = new Array(m)
    for (let i = 0; i < m+1; i++) {
        cost[i] = new Array(n+1)
    }
    for (let i = 0; i <= m; i++) {
        cost[i][0] = i
    }
    for (let j = 0; j <= n; j++) {
        cost[0][j] = j
    }

    for (let i = 1; i <=m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i-1] === word2[j - 1]) {
                cost[i][j] = cost[i-1][j-1]
            } else {
                cost[i][j] = 1 + Math.min(cost[i-1][j-1], Math.min(cost[i][j-1], cost[i-1][j]))
            }
        }
    }
    return cost[m][n]
};
// @lc code=end

