package main

import (
	"fmt"
)

func main() {
	fmt.Println("Elements at specific index ")

	arr1 := [7]int{10, 20, 30}
	fmt.Println("arr1 = ", arr1)
	// output,  arr1 =  [10 20 30  0 0 0 0]
	// here, remaining index takes default value, 0

	arr2 := [7]int{1: 10, 2: 20, 3: 30}
	fmt.Println("arr2 = ", arr2)
	// arr2 =  [0  10 20 30  0 0 0]
	// here, index 0, have default value, 0
	// while, index 1, 2, 3 taking the value we assign to them

	/*
	  Notes
	  arr2 := [7] int { 1:10, 2:20, 3:30}
	  here, we assigning
	  -- 10 to index = 1
	  -- 20 to index = 2
	  -- 30 to index = 3
	  and remaining indexes are taking defalut value, 0
	*/

	arr3 := [7]int{6: 64}
	fmt.Println("arr3 = ", arr3)
	// output , answer in comments section
	// arr3 =  [0 0 0 0 0 0 64]
}

// thank you
// all the very best
