package structure

import (
	"fmt"
)

// TreeNode 树节点的基本结构
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}
// TestTree 供main函数调用测试
func TestTree() {
	fmt.Println("/* ------------------------- 树 ------------------------------- */")
	// 构造二叉树
	input := []int{1, 2, 3, 4, 5, 6, 7} // 切片
	//注意:[]中指定长度声明的方式是数组，否则是切片
	//input := [...]int {1, 2, 3, 4, 5} // 数组
	/*
		切片类型的值是可变长的。而切片的类型字面量中只有其元素的类型，而没有其长度。切片的长度可以自动地随着其中元素数量的增长而增长，但不会随着元素数量的减少而减少。
		在每一个切片的底层数据结构中，会包含一个数组，可以被叫做底层数据，而切片就是对底层数组的引用，故而切片类型属于引用类型
		切片理解底层数据类似一个窗户，窗户的宽度就类似与底层数据的长度，而切片就是窗口（该窗口只能往一个方向移动），可以通过该窗口看到一个数组，但不一定能看到该数组中所有的元素，有时候只能看待连续的一部分元素
	*/
	//// 非递归构建完全二叉树
	input1 := []int{11, 22, 33, 44, 55, 66, 77} // 切片
	t1 := buildCompleteTree(input1)
	fmt.Println("前序非递归遍历")
	preArr := preorder(t1)
	fmt.Println(preArr)
	fmt.Println("中序非递归遍历")
	inArr := inorder(t1)
	fmt.Println(inArr)

	fmt.Println("后序非递归遍历")
	postArr := postorder(t1)
	fmt.Println(postArr)

	// 递归构建二叉树
	var preorderArr []int
	t := CompleteTreeCreateRecursive(0, input)

	fmt.Println("前序递归遍历")
	preorderArr = preorderRecursive(t, preorderArr)
	fmt.Println(preorderArr)

	fmt.Println("中序递归遍历")
	var inorderArr []int
	inorderArr = inorderRecursive(t, inorderArr)
	fmt.Println(inorderArr)

	fmt.Println("后序递归遍历")
	var postorderArr []int
	postorderArr = postorderRecursive(t, postorderArr)
	fmt.Println(postorderArr)

	fmt.Println("深度优先递归遍历")
	dfsRecursiveArr := make([]int, 0)
	dfsRecursive(t, &dfsRecursiveArr) // 此处传的是地址即指针类型， 所以可以直接改变数组，不需要赋值操作
	fmt.Println(dfsRecursiveArr)

	fmt.Println("深度优先 分治法递归遍历")
	divideArr := divideAndConquer(t)
	fmt.Println(divideArr)

	fmt.Println("广度优先遍历（层序遍历）")
	levelArr := levelOrder(t)
	fmt.Println(levelArr)
}

/* -------------------------  递归创建完全二叉树  ------------------------------- */
func CompleteTreeCreateRecursive(i int, arr []int) *TreeNode {
	t := &TreeNode{arr[i], nil, nil}
	if i < len(arr) && 2*i+1 < len(arr) {
		t.Left = CompleteTreeCreateRecursive(2*i+1, arr)
	}
	if i < len(arr) && 2*i+2 < len(arr) {
		t.Right = CompleteTreeCreateRecursive(2*i+2, arr)
	}
	return t
}

/* -------------------------  非递归创建完全二叉树  ------------------------------- */
func buildCompleteTree(input []int) *TreeNode {
	if len(input) < 1 {
		return nil
	}
	nodeMap := make(map[int]*TreeNode)
	nodeMap[0] = &TreeNode{Val: input[0]}

	for i := range input {
		if i*2+1 < len(input) {
			nodeMap[i*2+1] = &TreeNode{Val: input[i*2+1]}
			nodeMap[i].Left = nodeMap[i*2+1]

		}
		if i*2+2 < len(input) {
			nodeMap[i*2+2] = &TreeNode{Val: input[i*2+2]}
			nodeMap[i].Right = nodeMap[i*2+2]
		}
	}
	return nodeMap[0]
}

/* -------------------------  前序递归遍历二叉树  ------------------------------- */
func preorderRecursive(root *TreeNode, arr []int) []int {
	if root == nil {
		return arr
	}
	// 先访问根再访问左右
	fmt.Println(root.Val)
	arr = append(arr, root.Val)
	arr = preorderRecursive(root.Left, arr)
	arr = preorderRecursive(root.Right, arr)
	return arr
}

/* -------------------------  前序非递归遍历二叉树  ------------------------------- */
func preorder(root *TreeNode) []int {
	if root == nil {
		return nil
	}
	result := make([]int, 0)
	// 首先可以确定是用栈来实现，把每一个小树看成一个整体（node->left node-right），就可以发现三种遍历方式都是深度优先，不过在每个数内部遵循不同的规则
	stack := make([]*TreeNode, 0)
	for root != nil || len(stack) > 0 {
		for root != nil {
			result = append(result, root.Val)
			stack = append(stack, root)
			root = root.Left
		}
		// pop
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		root = node.Right
	}
	return result
}

/* -------------------------  中序递归遍历二叉树  ------------------------------- */
func inorderRecursive(root *TreeNode, arr []int) []int {
	if root == nil {
		return arr
	}
	arr = inorderRecursive(root.Left, arr)
	fmt.Println(root.Val)
	arr = append(arr, root.Val)
	arr = inorderRecursive(root.Right, arr)
	return arr
}

/* -------------------------  中序非递归遍历二叉树  ------------------------------- */
func inorder(root *TreeNode) []int {
	if root == nil {
		return nil
	}
	result := make([]int, 0)
	stack := make([]*TreeNode, 0)
	for root != nil || len(stack) > 0 {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		node := stack[len(stack)-1]
		result = append(result, node.Val)
		stack = stack[:len(stack)-1]
		root = node.Right
	}

	return result
}

/* -------------------------  后序递归遍历二叉树  ------------------------------- */
func postorderRecursive(root *TreeNode, arr []int) []int {
	if root == nil {
		return arr
	}
	arr = postorderRecursive(root.Left, arr)
	arr = postorderRecursive(root.Right, arr)
	fmt.Println(root.Val)
	arr = append(arr, root.Val)
	return arr
}

/* -------------------------  后序非递归遍历二叉树  ------------------------------- */
func postorder(root *TreeNode) []int {
	// 通过lastVisit标识右子节点是否已经弹出
	if root == nil {
		return nil
	}
	result := make([]int, 0)
	stack := make([]*TreeNode, 0)
	var lastVisit *TreeNode
	for root != nil || len(stack) != 0 {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		// 这里先看看，先不弹出
		node := stack[len(stack)-1]
		// 根节点必须在右节点弹出之后，再弹出
		if node.Right == nil || node.Right == lastVisit {
			stack = stack[:len(stack)-1] // pop
			result = append(result, node.Val)
			// 标记当前这个节点已经弹出过
			lastVisit = node
		} else {
			root = node.Right
		}
	}
	return result
}

/* -------------------------  深度优先递归遍历二叉树  ------------------------------- */
// 二叉树深度优先遍历其实就是前序遍历
func dfsRecursive(root *TreeNode, result *[]int) *[]int {
	if root == nil {
		return nil
	}
	// 传进来的result是地址，使用*对其取值才是数组
	*result = append(*result, root.Val)
	dfsRecursive(root.Left, result)
	dfsRecursive(root.Right, result)
	//如果传普通数组，而不是指针数组， 应该这样写
	//result = append(result, root.Val)
	//result = dsfRecursive(root.Left, result)
	//result = dsfRecursive(root.Right, result)
	return result
}

/* -------------------------  深度优先分治法递归遍历二叉树  ------------------------------- */
// 分治法思想和普通的递归深度优先基本一样？只是数组的赋值方式不太一样，待思考
func divideAndConquer(root *TreeNode) []int {
	result := make([]int, 0)
	if root == nil {
		return result
	}
	result = append(result, root.Val)
	left := divideAndConquer(root.Left)
	right := divideAndConquer(root.Right)
	result = append(result, left...)
	result = append(result, right...)
	return result
}

/* -------------------------  广度优先遍历二叉树  ------------------------------- */
//广度优先遍历就是层次遍历   返回二维数组
func levelOrder(root *TreeNode) [][]int {
	result := make([][]int, 0)
	if root == nil {
		return result
	}
	queue := make([]*TreeNode, 0)
	queue = append(queue, root)

	for len(queue) > 0 {
		list := make([]int, 0)
		l := len(queue)
		for i := 0; i < l; i++ {
			node := queue[0]
			list = append(list, node.Val)
			queue = queue[1:]
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		result = append(result, list)
	}
	return result
}
