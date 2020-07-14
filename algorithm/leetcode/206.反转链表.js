/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (69.67%)
 * Likes:    1090
 * Dislikes: 0
 * Total Accepted:    279.1K
 * Total Submissions: 399.9K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 每次都把current往头元素添加
// var reverseList = function (head) {
//     if (head == null) {
//         return head
//     }
//     let current = head.next
//     let pre = head
//     let newHead = head
//     while (current != null) {
//         pre.next = current.next
//         let temp = current
//         current = current.next
//         temp.next = newHead
//         newHead = temp
//     }

//     return newHead
// }

// 以current为中心向两边分割扩散 null 1 <- 2 <- 3(pre)<-(current)  (next)4->5->
var reverseList = function (head) {
    let cur = head;
    let pre = null
    while (cur != null) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}
// @lc code=end
