/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (61.70%)
 * Likes:    761
 * Dislikes: 0
 * Total Accepted:    106.5K
 * Total Submissions: 168.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 
 * 
 * 示例：
 * 
 * 给你这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup1 = function (head, k) {
//     if (head == null) {
//         return head;
//     }
//     let flag = 1;
//     let newHead = head;
//     let arrLastNode = null;
//     while (head != null) {
//         let cacheArr = [];
//         for (let i = 0; i < k; i++) {
//             if (head != null) {
//                 cacheArr.push(head);
//                 head = head.next;
//             }
//         }
//         if (flag === 1) {
//             newHead = cacheArr[k - 1]
//         }
       
//         if (cacheArr.length === k) {
//             for (let j = k - 1; j > 0; j--) {
//                 cacheArr[j].next = cacheArr[j - 1];
//             }
//             cacheArr[0].next = null
//             if (arrLastNode) {
//                 arrLastNode.next = cacheArr[k - 1]
//             }
//             arrLastNode = cacheArr[0]
//         } else {
//             arrLastNode.next = cacheArr[0];
//         }
//         flag ++;
//     }
//     return newHead;
// };
var reverseKGroup = function (head, k) {
    const reverse = (head) => {
        let pre = null;
        let cur = head;
        while (cur != null) {
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }
    const dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy, end = dummy;
    while (end.next != null) {
        for (let i = 0; i < k && end != null; i++) {
            end = end.next;
        }
        if (end == null) {
            break;
        }
        let start = pre.next;
        let next = end.next;
        end.next = null;
        pre.next = reverse(start);
        start.next = next;
        pre = start;
        end = pre;
    }
    return dummy.next;
};
// @lc code=end

