package main

import (
	"fmt"
)

/*
Array Declarations

1. using var
2. using :=

syntax
1. var <arrayName> = [<arrayLength>] <dataType> { <arrayValue1>, <arrayValue2>, .....}
2. <arrayName> := [<arrayLength>] <dataType> { <arrayValue1>, <arrayValue2>, .....}

syntax, when length is not defined
1. var <arrayName> =[] <dataType> { <arrayValue1>, <arrayValue2>, .....}
2. <arrayName> := [] <dataType> { <arrayValue1>, <arrayValue2>, .....}

Note
-- when array length will not defined, then "go" will define the length

*/

func main() {
	fmt.Println("Array Declarations in Depth")

	var citiesName = [3]string{"Patna", "Mumbai"} // length is 3, while only 2 elements
	var citiesName2 = [3]string{"New York", "Mumbai", "Patna"}
	citiesName3 := [3]string{"Patna", "Mumbai"} // length is 3, while only 2 elements
	citiesName4 := [3]string{"New York", "Mumbai", "Patna"}

	fmt.Println(citiesName)
	fmt.Println(citiesName2)
	fmt.Println(citiesName3)
	fmt.Println(citiesName4)

	fmt.Println()

	var primeNumbers = [5]int{2, 3, 5, 7} //length is 5, while only 4 elements
	var primeNumbers2 = [5]int{2, 3, 5, 7, 11}
	fmt.Println(primeNumbers)
	fmt.Println(primeNumbers2)

	/*
	   Note
	   -- when length is defined, and value is not present at all index, then
	   -- in string, remaining value will be "empty"
	   -- in int, remaining value will be "0"
	*/

	fmt.Println()

	// here, array length is not defined
	var evenNumbers = []int{2, 4, 6, 8} // 4 elements
	oddNumbers := []int{1, 3, 5, 7, 9}  // 5 elements
	fmt.Println(len(evenNumbers))       // 4
	fmt.Println(len(oddNumbers))        //5

	/*
	   syntax breakdwon
	   -- var primeNumbers = [5] int {2, 3, 5, 7, 11}

	   -- var = keyword in 'go lang'
	   -- primeNumbers = arrayName or variableName
	   -- [] =  depict array
	   -- [5] = length of array
	   -- int = data type of value of array
	   -- {2, 3, 5, 7, 11} = values of the array

	*/
}

// thank you
// all the very best
