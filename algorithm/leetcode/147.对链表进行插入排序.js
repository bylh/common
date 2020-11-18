/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 *
 * https://leetcode-cn.com/problems/insertion-sort-list/description/
 *
 * algorithms
 * Medium (65.34%)
 * Likes:    234
 * Dislikes: 0
 * Total Accepted:    45K
 * Total Submissions: 68.7K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 对链表进行插入排序。
 * 
 * 
 * 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
 * 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
 * 
 * 
 * 
 * 插入排序算法：
 * 
 * 
 * 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
 * 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
 * 重复直到所有输入数据插入完为止。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 示例 2：
 * 
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
 * 
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
var insertionSortList = function (head) {
    if (head == null) {
        return head
    }
    let pre = head
    let cur = head.next
    while (cur != null) {
        if (cur.val >= pre.val) { // 大于等于的时候往下走
            pre = cur
            cur = cur.next
        } else { // 需要移动的节点
            pre.next = cur.next
            if (cur.val < head.val) {
                cur.next = head;
                head = cur;
                cur = pre.next;
            } else {
                let temp = head;
                while (temp != null) {
                    if (cur.val >= temp.val && cur.val <= temp.next.val) {
                        cur.next = temp.next
                        temp.next = cur
                        break
                    }
                    temp = temp.next;
                }
                cur = pre.next
            }
        }
    }
    return head
};
// const { createList } = require('../structure/js/list')
// console.log(insertionSortList(createList([-1, 5, 3])))
// @lc code=end

