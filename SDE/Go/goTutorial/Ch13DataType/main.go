package main

import (
	"fmt"
)

func main() {

	/*
		-- Data type is used to define the type of variable, also it define the memory the variable is going to take
		-- types of variable in go
		-- 1. bool
		-- 2. int
		-- 3. float , float32, float64
		-- 4. string
		-- 5. complex, complex64, complex128
		-- 6. byte
		-- 7. rune
		-- 8. uint, uint8, uint16, uint32, uint64,
		-- 9. uintptr
	*/

	fmt.Println("Data types in Go ")

	var haveGf bool = false
	var numberOfGf int = 1
	var moneySpendOnGf float32 = 98765.2345
	var nameOfGf string = "Natasha"
	var expectationsOfGf complex128 = 2i + 56

	fmt.Printf("Type of %t is %T \n", haveGf, haveGf)
	fmt.Printf("Type of %d is %T \n", numberOfGf, numberOfGf)
	fmt.Printf("Type of %f is %T \n", moneySpendOnGf, moneySpendOnGf)
	fmt.Printf("Type of %s is %T \n", nameOfGf, nameOfGf)
	fmt.Printf("Type of %v is %T \n", expectationsOfGf, expectationsOfGf)
}

// thank you
// all the very best
