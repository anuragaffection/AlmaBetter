
/*
  slice in Go Programming 
  -- What is slice 
  -- how it is different from an array 

*/

package main 

import "fmt"

func main()  {

	/*
	  What is slice 
	  -- Syntax wise it is similar to array 
	  -- It is dynamic 
	  -- we can increase the length of slice 
	  -- It has reference type 
	  -- It store same type of elememnts, just like array 


	  Difference between array & slice 
	  1. Array 
	  -- we can or can't specify the length here
	  -- length cannot be changed 
	  -- we can't add new elements 
	  -- len() function is used to find the length of array

	  2. Slice 
	  -- we don't specify length here
	  -- we can change the length 
	  -- we have append() function to add elements 
	  -- len() function is used to find the length of slice 

	  Notes 
	  -- we can say slices are modified array 
	  -- append() , always add elements to last of the slices 

	  Tips 
	  -- if you are able to append elements to array, then it is slice 
	  -- if you are not able to append elements to array, then it is array only 

	*/

	fmt.Println("slice in Go")

	// these are array 
	var arr1 = [] int {20, 40, 50} // [20 40 50]
	var arr2 = [5] int {20, 40, 50} // remaining index will take default value, [20 40 50 0 0]
	fmt.Println(arr1)
	fmt.Println(arr2)

	// important notes 
	// arr2 have fixed length, so it will never become slice 
	// arr1 can become slice, here length is  not defined,  we can use append() function to add the elements 

	// here, append() , creating a reference from arr1, and assigning to variable slice1 
	// now, this slice1 is dynamic, it is slice now, 
	var slice1 = append(arr1, 60, 70, 80);
	fmt.Println("slice = " , slice1)

	// append(arr1, 60)
	// fmt.Println(arr1)
	// this will gives error, 
	// arr1, is still the array type, & we are trying to add in array, we can't modify array 


}

// we will explore more in details 
// for now, just keep in mind , how syntax of slice is different from array 


// thank you 
// all the very best 