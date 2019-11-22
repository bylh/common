/*
 * @lc app=leetcode.cn id=1 lang=golang
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (45.96%)
 * Likes:    6939
 * Dislikes: 0
 * Total Accepted:    684.5K
 * Total Submissions: 1.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 *
 */
package main

import "fmt"

func main() {
	nums := []int{0, 4, 3, 0}
	target := 9
	fmt.Println(twoSum(nums, target))
}

// @lc code=start
func twoSum1(nums []int, target int) []int {
	result := []int{0, 0}
	for i := 0; i < len(nums); i++ {
		// 应该考虑到 x + y 其中有0的情况，所以用小于等于
		// 只有正整数可以加此判断
		// if nums[i] <= target { // 只有正整数可以加此判断
		// 	result[0] = i
		// 	for j := result[0] + 1; j < len(nums); j++ {
		// 		if nums[j]+nums[result[0]] == target {
		// 			result[1] = j
		// 			return result
		// 		}
		// 	}
		// }
		result[0] = i
		for j := result[0] + 1; j < len(nums); j++ {
			if nums[j]+nums[result[0]] == target {
				result[1] = j
				return result
			}
		}
	}
	return result
}
// 使用map, 其实原理差不多，只是使用了map搜索速度很快这一特性(需要注意的是用nums中的具体数据做key, 索引作为value)
func twoSum(nums []int, target int) []int {
	// result := []int{0, 0}
	tempMap := make(map[int]int)
	for i,v := range nums {
		a := target - v
		// if 语句先查看值，如果存在即不为nil, 则返回
		if _, ok := tempMap[a]; ok {
			return []int{tempMap[a], i}
		}
		tempMap[v] = i
	}
	return nil
}

// @lc code=end
