package structure

import "fmt"

func TestSort() {
	fmt.Println("/* ------------------------- 排序算法 ------------------------------- */")
	input := []int{5, 3, 8, 6, 9, 1, 7, 2, 4}
	fmt.Println("输入数组：", input)
	mergeSortArr := mergeSort(input)
	fmt.Println(mergeSortArr)
}

/* -------------------------  归并排序（分治法思想） ------------------------------- */

/* -------------------------  归并排序（分治法思想） ------------------------------- */
func mergeSort(nums []int) []int {
	if len(nums) <= 1 {
		return nums
	}
	// 找出中间位置，二分
	mid := len(nums) / 2
	left := mergeSort(nums[:mid])
	right := mergeSort(nums[mid:])
	// 合并左右两端的数据
	result := merge(left, right)
	return result
}

// get新技能 (result []int)返回值
func merge(left []int, right []int) (result []int) {
	l := 0
	r := 0

	for l < len(left) && r < len(right) {
		if left[l] < right[r] {
			result = append(result, left[l])
			l++
		} else {
			result = append(result, right[r])
			r++
		}
	}
	/* 思考：为什么此处剩余的部分直接就追加到数组的尾部不需要排序呢
	大数组最终拆分到 1：1 或者1，1：1的排好序，向上合并要么对1：1， 要么对1即长度差不会超过1，且较长的也是排好序的，
	比如3 1 2, 分成3 1和2两队，31排序之后是13, 2排序后是2， 13和2合并，12， 3追加一定没问题
	*/

	result = append(result, left[l:]...)
	result = append(result, right[r:]...)
	return result
}
