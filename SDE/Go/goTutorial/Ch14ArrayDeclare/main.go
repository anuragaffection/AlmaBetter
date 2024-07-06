package main

import (
	"fmt"
)

/*
   Array Declarations
   1. using var
   2. using :=

   syntax of Array declarations
   1. var <arrayName>  = [<arrayLength] <dataType> {<arrayValue1>, <arrayValue2>, .....}
   2. <arrayName>  :=  [<arrayLength] <datType> {<arrayValue1>, <arrayValue2>, .....}

   Reacall
   1. var , can be used anywhere, have golbal declarations
   2. := ,  only used in within function.

   Notes
   -- len(), used to find the length of the array
   -- indexing, is zero based in go
   -- array declaration is slightly different

*/

func main() {
	fmt.Println("Array Declrations in Go ")

	var nameOfCity = [5]string{"New Moon", "New York", "Mumbai", "Delhi", "Patna"}
	fmt.Println(nameOfCity)
	fmt.Println(len(nameOfCity)) // length of the array

	numberOfJersey := [3]int{4, 8, 10}
	fmt.Println(numberOfJersey)
	fmt.Println(len(numberOfJersey)) // length of the array

}

// thank you
// all the very best
