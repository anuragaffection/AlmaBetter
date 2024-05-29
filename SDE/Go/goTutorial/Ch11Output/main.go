package main 

import (
	"fmt"
)

func main (){
	fmt.Println("Output function in go ")

	/*
	   -- using Print()
	   -- using Println()
	   -- using Printf()
	*/

	// Print() just print without adding any spaces or new line 
	fmt.Print("Hello ")
	fmt.Print("World! ")

	// Printl(),  print & add new line 
	fmt.Println("Welcome to go")
	fmt.Println("Welcome to go again ")

	// Printf, print according to formatting 
	var myName = "Anurag Affection"
	fmt.Printf("My name is %v \n", myName)
}

/*
  Recall 
  -- Print()
  -- Println()
  -- Printf()

  explore more 
  -- Fprint()
  -- Fprintln()
  -- Fprintf()
*/



// that's all for this chapter 
//  thank you 