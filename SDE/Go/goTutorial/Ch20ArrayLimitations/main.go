package main 

import "fmt"

func main()  {

	/*
	   Notes 
	   -- In Go, Array is static 
	   -- so, we can't increase or decrease the length of the array 
	   -- but we can change the value of the array elements

	   -- to solve this problem, we have slice in go
	   -- will explore slices in upcoming videos 
	*/

	arr := [] int {80, 90}
	fmt.Println(arr)

	// let's try to add element, means try to increase the length 
	// gives error, as index = 2, out of the bound 
	// arr[2] = 100;
	// fmt.Println(arr)

	// we can update the array 
	arr[0] = 40;
	arr[1] = 0;
	fmt.Println(arr)

	fmt.Println("Limitations of Array ")
}

// thank you 
// all the very best 