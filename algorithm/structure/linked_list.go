package structure

import (
	"fmt"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func TestLinkedList() {
	fmt.Println("/* ------------------------- 链表 ------------------------------- */")
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	head := createLinkedList(arr)
	fmt.Println(head)
	fmt.Println(traverseLinkList(head))
	fmt.Println(traverseLinkList(head))

	fmt.Println(head)
	// 思考为啥两次答应的head地址相等，因为go函数本质上都是拷贝传值，地址这个值在函数内部重新赋值不会变的

	//fmt.Println("反转链表")
	//reverseHead := reverseLinkList(head)
	//fmt.Println(traverseLinkList(reverseHead))
	//fmt.Println(traverseLinkList(head))
	fmt.Println("反转链表 m -> n")
	head = reverseBetween(head, 3, 6)
	fmt.Println(traverseLinkList(head))

}

func createLinkedList(input []int) *ListNode {
	if len(input) == 0 {
		return nil
	}
	head := new(ListNode)
	current := head
	for _, v := range input {
		current.Next = &ListNode{Val: v, Next: nil}
		current = current.Next
	}
	return head.Next
}

func traverseLinkList(head *ListNode) []int {
	result := make([]int, 0)
	for head != nil {
		result = append(result, head.Val)
		head = head.Next
	}
	return result
}

func reverseLinkList(head *ListNode) *ListNode {
	var newHead *ListNode
	current := head
	for current != nil {
		temp := current.Next
		current.Next = newHead
		newHead = current
		current = temp
	}
	return newHead
}

//反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
func reverseBetween(head *ListNode, m int, n int) *ListNode {
	current := head
	if current == nil {
		return nil
	}
	if m < 1 {
		m = 1
	}

	if m > n {
		temp := n
		n = m
		m = temp
	}
	i := 0
	var mNode *ListNode
	for ; i < m-1; i++ {
		mNode = current
		current = current.Next
	}
	if current == nil {
		return head
	}
	nNode := current
	var subHeader *ListNode
	j := 0
	for ; j < n-m+1 && current != nil; j++ {
		temp := current.Next // 保存当前节点的下一个指向
		current.Next = subHeader
		subHeader = current
		current = temp
	}
	if mNode != nil {
		mNode.Next = subHeader
	} else {
		mNode = subHeader
		head = subHeader
	}
	nNode.Next = current
	return head
}
