package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	textArray := []string{"加油", "冲冲冲", "优秀", "不多说，再来1000层"}
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	for index := 0; index < 10; index++ {
		x := r.Intn(4)
		fmt.Println(textArray[x], x)
	}
}
