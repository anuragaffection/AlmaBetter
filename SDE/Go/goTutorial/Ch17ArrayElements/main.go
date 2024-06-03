package main 

import (
	"fmt"
)

func main()  {
	fmt.Println("Accessing Elements of an array")

	var primeNumbers  = [5] int {2, 3, 5, 7, 11};

	fmt.Println(primeNumbers) // [2 3 5 7 11]
	fmt.Println("length = ", len(primeNumbers)) // length =  5

	// accessing elements 
	// we are accessing elements using index 
	// in go, indexig is 0 based 
	// first elements, will have index = 0
	// last elements, will have index = length - 1 
	fmt.Printf("%v\n", primeNumbers[0]); // 2
	fmt.Printf("%d\n", primeNumbers[1]) // 3
	fmt.Printf("%d\n", primeNumbers[2]) // 5
	fmt.Printf("%d\n", primeNumbers[3]) // 7
	fmt.Printf("%d\n", primeNumbers[4]) // 11
}

// thank you 
// all the very best 