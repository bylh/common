package structure

import "fmt"

type MinStack struct {
	min   []int
	stack []int
}

func TestStack() {
	fmt.Println("/* ------------------------- 栈的操作 ------------------------------- */")
	obj := Construct()
	obj.Push(1)
	obj.Push(2)
	obj.Push(5)
	obj.Push(3)
	obj.Push(8)
	fmt.Println(obj.GetMin())
}

func Construct() MinStack {
	return MinStack{
		min:   make([]int, 0),
		stack: make([]int, 0),
	}
}

// 元素入栈
func (t *MinStack) Push(x int) {
	min := t.GetMin()
	if x < min {
		t.min = append(t.min, x)
	} else {
		/*思考：为什么此处在插入元素比最小元素大的时候也要继续追加
			这样做是为了保持二者长度一致，每次都能拿到最小元素，而且出栈的时候二者同时出栈，
		保证普通栈最小元素更新，这个最小元素也出栈了*/
		t.min = append(t.min, min)
	}
	t.stack = append(t.stack, x)
}

// 元素出栈
func (t *MinStack) Pop() {
	if len(t.stack) == 0 {
		return
	}
	t.stack = t.stack[:len(t.stack)-1]
	t.min = t.min[:len(t.min)-1]
}

// 获取最顶端元素
func (t *MinStack) Top() int {
	if len(t.min) == 0 {
		return 0
	}

	return t.stack[len(t.stack)-1]
}

// 获取最小元素
func (t *MinStack) GetMin() int {
	if len(t.min) == 0 {
		return 1 << 31
	}
	min := t.min[len(t.min)-1]
	return min
}
