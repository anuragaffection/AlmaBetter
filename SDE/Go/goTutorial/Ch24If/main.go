package main 

import "fmt"

func main()  {

	/*
	   Notes 
	   -- this if statements will run when the conditions will be true 

	   syntax 
	   if condition {
	      // code to execute 
	   }

	*/
	fmt.Println("if statements in Go");

	var age int = 20;

	// this is our if statements 
	// age >= 18 is conditions we are checking 
	if age >= 18 {
		// this code will execute when conditions is true
		fmt.Println("You are ready to vote.")
	}
}

// thats all for this video 