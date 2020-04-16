//编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
//
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
//
// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
//
//
//
// 示例 1：
//
// 输入：["h","e","l","l","o"]
//输出：["o","l","l","e","h"]
//
//
// 示例 2：
//
// 输入：["H","a","n","n","a","h"]
//输出：["h","a","n","n","a","H"]
// Related Topics 双指针 字符串


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/* -------------------------  双指针法 ------------------------------- */
// 复杂度分析

// 时间复杂度：O(N)。执行了 N/2N/2 次的交换。
// 空间复杂度：O(1)，只使用了常数级空间。

var reverseString = function(s) {
    if(!Array.isArray(s) || s.length === 0) {
        return;
    }
    let left = 0, right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left ++;
        right --;
    }
};
/* --------------------------- 递归 ------------------------------- */
// var reverseString = function(s) {
//     if(!Array.isArray(s) || s.length === 0 || s.length === 1) {
//         return;
//     }
//     let temp = s.shift();
//     reverseString(s);
//     s.push(temp);
// };
//leetcode submit region end(Prohibit modification and deletion)
