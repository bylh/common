/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (52.18%)
 * Likes:    781
 * Dislikes: 0
 * Total Accepted:    139.8K
 * Total Submissions: 267.9K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 *
 * 示例:
 *
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    function mergeTwo(l1, l2) {
      if (l1 == null) {
        return l2
      }
      if (l2 == null) {
        return l1
      }
      let head = new ListNode()
      let current = head
      while (l1 && l2) {
        if (l2.val >= l1.val) {
          current.next = l1
          l1 = l1.next
        } else {
          current.next = l2
          l2 = l2.next
        }
        current = current.next
      }
      current.next = l1 || l2
      return head.next
    }
    let len = lists.length
    if (len === 0) {
        return null
    }
    if (len === 1) {
        return lists[0]
    }
    if (len === 2) {
        return mergeTwo(lists[0], lists[1])
    }
    let mid = len >> 1 // Math.floor(len / 2)
    let list1 = lists.slice(0, mid)
    let list2 = lists.slice(mid)
    return mergeTwo(mergeKLists(list1), mergeKLists(list2))
  }
// var mergeKLists = function (lists) {
//   function mergeTwo(l1, l2) {
//     if (l1 == null) {
//       return l2
//     }
//     if (l2 == null) {
//       return l1
//     }
//     let head = new ListNode()
//     let current = head
//     while (l1 && l2) {
//       if (l2.val >= l1.val) {
//         current.next = l1
//         l1 = l1.next
//       } else {
//         current.next = l2
//         l2 = l2.next
//       }
//       current = current.next
//     }
//     current.next = l1 || l2
//     return head.next
//   }
//   let head = null
//   for (let l of lists) {
//     head = mergeTwo(l, head)
//   }
//   return head
// }
// @lc code=end
