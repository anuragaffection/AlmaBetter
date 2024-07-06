package main

import (
	"fmt"
)

func main() {
	/*
		-- types of variable in go
		-- 1. bool
		-- 2. int
		-- 3. float, float32, float64
		-- 4. string
		-- 5. complex, complex64, complex128
		-- 6. byte
		-- 7. rune
		-- 8. uint, uint8, uint16, uint32, uint64,
		-- 9. uintptr
	*/

	var myGF bool = false
	var myAGe int = 92
	var myPI float32 = 3.141
	var myName string = "Captain America"
	var myStrength complex64 = 5i

	fmt.Println("types of Variable in Go")
	fmt.Println("myGF : ", myGF)
	fmt.Println("myAGe : ", myAGe)
	fmt.Println("myPI : ", myPI)
	fmt.Println("myName : ", myName)
	fmt.Println("myStrength : ", myStrength)
}

// than you
// that's all for this chapter
