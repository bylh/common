package structure

import "fmt"

type MyQueue struct {
	stack []int
	back  []int
}

/** Initialize your data structure here. */
func Constructor() MyQueue {
	return MyQueue{
		stack: make([]int, 0),
		back:  make([]int, 0),
	}
}

// 1
// 3
// 5

/** Push element x to the back of queue. */
func (t *MyQueue) Push(x int) {
	for len(t.back) != 0 {
		val := t.back[len(t.back)-1]
		t.back = t.back[:len(t.back)-1]
		t.stack = append(t.stack, val)
	}
	t.stack = append(t.stack, x)
}

/** Removes the element from in front of queue and returns that element. */
func (t *MyQueue) Pop() int {
	for len(t.stack) != 0 {
		val := t.stack[len(t.stack)-1]
		t.stack = t.stack[:len(t.stack)-1]
		t.back = append(t.back, val)
	}
	if len(t.back) == 0 {
		return 0
	}
	val := t.back[len(t.back)-1]
	t.back = t.back[:len(t.back)-1]
	return val
}

/** Get the front element. */
func (t *MyQueue) Peek() int {
	for len(t.stack) != 0 {
		val := t.stack[len(t.stack)-1]
		t.stack = t.stack[:len(t.stack)-1]
		t.back = append(t.back, val)
	}
	if len(t.back) == 0 {
		return 0
	}
	val := t.back[len(t.back)-1]
	return val
}

/** Returns whether the queue is empty. */
func (t *MyQueue) Empty() bool {
	return len(t.stack) == 0 && len(t.back) == 0
}

func TestQueue() {
	obj := Constructor()
	obj.Push(1)
	fmt.Println("测试队列push", obj.stack, obj.back)
	obj.Push(2)
	fmt.Println("测试队列push", obj.stack, obj.back)

	obj.Push(3)
	fmt.Println("测试队列push", obj.stack, obj.back)
	obj.Push(4)
	fmt.Println("测试队列push", obj.stack, obj.back)

	obj.Pop()
	fmt.Println("测试队列pop", obj.stack, obj.back)
	obj.Pop()
	fmt.Println("测试队列pop", obj.stack, obj.back)
	obj.Pop()
	fmt.Println("测试队列pop", obj.stack, obj.back)
	obj.Pop()
	fmt.Println("测试队列pop", obj.stack, obj.back)
}
