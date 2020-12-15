/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (38.92%)
 * Likes:    1386
 * Dislikes: 0
 * Total Accepted:    412.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const getCommon = (leftStr, rightStr) => {
        minLen = Math.min(leftStr.length, rightStr.length)
        for (let i = 0; i < minLen; i++) {
            if (leftStr[i] !== rightStr[i]) {
                return leftStr.substring(0, i)
            }
        }
        return leftStr.substring(0, minLen)
    }

    const lcp = (strs, start, end) => {
        if (start === end) {
            return strs[start]
        }
        let mid = ((end - start) >> 2) + start
        let lcpLeft = lcp(strs, start, mid)
        let lcpRight = lcp(strs, mid + 1, end)
        return getCommon(lcpLeft, lcpRight)
    }
    if (!strs || !strs.length) {
        return ""
    }
    return lcp(strs, 0, strs.length - 1)
};
// @lc code=end

