package main 

import (
	"fmt"
)

func main()  {
	fmt.Println("Array Updating in Go")


	// here, we have length is defined 
	primeNumbers := [5]int {2, 3,5, 7, 11};
	fmt.Println("before updating = ", primeNumbers)

	// here, we are updating the array element,at index 4 
	primeNumbers[4] = 13;
	fmt.Println("after updating = ", primeNumbers)

	// primeNumbers[6] = 19;
	// fmt.Println("after updating at index beyond the length = ", primeNumbers)
	// this will gives error, 
	// because we can't add or update out of bound  or  out of defined length of the array 



	// here length is not defined 
	primeNumbers2 := [] int {13, 17}
	fmt.Println("before updating", primeNumbers2)

	// primeNumbers2[6] = 19;
	// fmt.Println("after updating", primeNumbers2)
	// fmt.Println("after updating at index beyond the length = ", primeNumbers)
	// this will gives error, 
	// because we can't add or update  "out of bound"  or  "out of defined length" of the array 
	

	/*
	  Notes
	  -- In Go, array is static 
	  -- we can't add elemement beyond the defined length 
	  -- even, we don't specify length, go will take the length according to number of elements present 

	*/
}


// thank you 
// all the very best