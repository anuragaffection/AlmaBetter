package main 

import "fmt"

func main()  {
	fmt.Println("Acessing element from Slice")

	/*
	   slice is has zero based indexing, same as array 
	   we can access the elements of slice using index.
	   we can update or add the elements to slice using index. 

	   syntax to get element 
	   -- sliceName[index]

	   syntax to add element 
	   -- sliceName[index] = <Element>

	*/



	// 01. creating slice using array like structure 
	var numberSlice = [] int {40, 55, 77, 88}

	// adding element to slice 
	// numberSlice[4] = 99; // this will gives error 
	/* 
	    to add element to slice, 
		which is created using array like syntax or beyond the initial setup length, 
		we have to use append() method 
	*/
	numberSlice = append(numberSlice, 99)
	fmt.Println(numberSlice)

	// accessing element
	fmt.Println("element at index, 0 = ", numberSlice[0])
	fmt.Println("element at index, 1 = ", numberSlice[1])




	// 02. creating empty slices , using make()
	// here, length = 5
	// here, capacity = 10 
	var primeNumbers = make([] int, 5, 10)

	// adding element to primeNumbers slice 
	primeNumbers[0] = 2
	primeNumbers[1] = 3
	primeNumbers[2] = 5

	// primeNumbers[7] = 37; this will gives error too, 
	// the reason is length is set to 5, we can't add beyond 5 using index 

	// these element will be append after length 5 
	primeNumbers = append(primeNumbers, 37, 41, 47, 53, 59, 61, 67)

	fmt.Println(primeNumbers)

	
}


// thank you 
// all the very best 