/*
 * @lc app=leetcode.cn id=4 lang=golang
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (34.87%)
 * Likes:    1066
 * Dislikes: 0
 * Total Accepted:    55.7K
 * Total Submissions: 159.6K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 *
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 则中位数是 2.0
 *
 *
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 则中位数是 (2 + 3)/2 = 2.5
 *
 *
 */

package main

import "fmt"

func main() {
	nums1 := []int{}
	nums2 := []int{1, 2, 3, 4}
	fmt.Println(nums1, nums2)
	fmt.Println("start", findMedianSortedArrays(nums1, nums2))
}

// @lc code=start

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	
	if len(nums1) < len(nums2) {
		nums1, nums2 = nums2, nums1
	}
	m, n := len(nums1), len(nums2)
	
	if m == 0 {
		return 0
	}

	if n == 0 {
		if (m % 2 == 0) {
			return float64(nums1[m / 2 -1] + nums1[m / 2]) / 2
		}
		return float64(nums1[m / 2])
	}

	


	return 0
}

// @lc code=end
