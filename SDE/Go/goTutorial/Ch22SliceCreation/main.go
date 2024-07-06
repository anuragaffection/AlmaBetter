package main

import "fmt"

/*
   Ways to create slice in Go
   -- similar to array syntax
   -- from an array
   -- using make() function
   -- capacity in details in go
*/

func main() {

	fmt.Println("How to Create Slice in Go")

	/*
		    1. creating slice, similar to array like syntax

			syntax
			-- var <sliceName> = [] dataType {element1, element2, .... }
			-- <sliceName> := [] dataType {element1, element2, .... }

			these slice1 & slice2  are  array & slice  at same times
			here, length is not defined, so it will work as slice too
	*/
	var slice1 = []int{20, 40, 50}
	slice2 := []int{222, 333, 444}
	fmt.Println("way 01 of slice creation = ", slice1, slice2)

	/*
		    2. creating slice, from an array
			here arr1, is purely array , because length is defined here

			syntax to create slice from an arry
			-- var <sliceName> = arrName[startIndex:endIndex]
			-- <sliceName> := arrName[startIndex:endIndex]

			Note
			-- startIndex is included
			-- endIndex is excluded

			Here, by defaylt startIndex is 0
			-- var <sliceName> = arrName[:endIndex]
			-- <sliceName> := arrName[:endIndex]
	*/
	var arr1 = [5]int{7, 17, 27, 37, 77}
	var slice3 = arr1[1:5]
	slice4 := arr1[:5]
	fmt.Println("way 02 of slice creation = ", slice3, slice4)

	/*
	   3. Creating slice from make() function
	   -- make() , inbuilt function in go
	   -- it create an empty slice, we can add element by using index
	   -- we can add element in slices, just like an array

	   syntax
	   -- var <sliceName> = make( [] dataType, length, capacity)
	   -- <sliceName> :=  make( [] dataType, length, capacity)

	   Notes
	   -- length, define the length of the slice
	   -- capacity, is the value of much slice can shrink or epxand
	   -- capacity, get's double of its previous space , to adjust the elements
	*/
	var slice5 = make([]int, 5, 10)
	slice6 := make([]int, 5, 10)
	fmt.Println(slice5, slice6)

}

// thank you
// all the very best
