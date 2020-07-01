package structure

import "fmt"

//分治法应用
//先分别处理局部，再合并结果
//适用场景
//快速排序
//归并排序
//二叉树相关问题
/* ------------------------- 分治法模板 ------------------------------- */
//递归返回条件
//分段处理
//合并结果
func TestDivideAndConquer() {
	fmt.Println("/* ------------------------- 分治法思想 ------------------------------- */")
	fmt.Println("分治法求二叉树的最大深度")
	// 构造二叉树
	input := []int{1, 2, 3, 4, 5, 6, 7, 8} // 切片

	t := CompleteTreeCreateRecursive(0, input)
	fmt.Println(maxDeth(t))
}

/* -------------------------  分治法求二叉树的最大深度 ------------------------------- */
// 一个大问题最终都会集中到一个原子问题上
func maxDeth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	left := maxDeth(root.Left)
	right := maxDeth(root.Right)

	if left > right {
		return left + 1
	} else {
		return right + 1
	}
}
