package main 

import (
	"fmt"
)


func main() {
	fmt.Println("Array Initializations types ")

	// dataType, is  must to be define in array 

	numbers1 := [5] int {} // just initialized 
	numbers2 := [5] int {10, 20} // partially initialized 
	numbers3 := [5] int {10, 20, 30, 40, 50 } // fully initialized 

	// here, we have define the length of the array
	// so, if value for each index is not available, then it will take default value 

	// also, we know , the default value 
	// -- for int = 0
	// -- for string =  "empty"
	// -- for boolean = false 
	

	fmt.Println(numbers1)
	fmt.Println(numbers2)
	fmt.Println(numbers3)
	
}


// thank you 
// all the very best 