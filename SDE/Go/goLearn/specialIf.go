package main

import "fmt"

func main() {

	// Example 1
	x := 10
	if x > 5 {
		fmt.Println("x is greater than 5")
	} else {
		fmt.Println("x is not greater than 5")
	}

	// example 2
	if x := 10; x > 5 {
		fmt.Println("x is greater than 5")
	} else {
		fmt.Println("x is not greater than 5")
	}

	// both example1 & example 2 are doing  the same things

	// Example 3
	if value := 10; value < 15 {
		fmt.Println("value is less than 15")
	} else {
		fmt.Println("value is not less than 15")
	}
}
