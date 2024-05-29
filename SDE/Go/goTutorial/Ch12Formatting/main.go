package main 

import (
	"fmt"
)


func main () {
	/*
	    In Go, there are lots of formattig verb, we wil some most used 

		-- %d, integer

		-- %f, float 
		-- %.2f, float + precision to two decimal 
		-- %.3f, float + precision to three decimal 

		-- %s, string 
		-- %t, boolean 

		-- %v, value of variable 
		-- %T, type of variable  


		-- \n , used to format in new line
	*/
 
	fmt.Println("Foramatting verb in Go")

	// integer
	var number = 10; 
	fmt.Printf("the number given is %d \n", number)
	fmt.Printf("the number given is %v \n", number)
	fmt.Printf("the type of  number given is %T \n", number)

	// float 
	var PI = 3.141;
	fmt.Printf("the value of PI is %f \n", PI)
	fmt.Printf("the value of PI is %.f \n", PI)
	fmt.Printf("the value of PI in two decimal precision is  %.2f \n", PI) 
	fmt.Printf("the value of PI in three decimal precision is %.3f \n", PI)

	// string 
	var myName = "Anurag"
	fmt.Printf("My name is %s \n", myName)

	// boolean 
	var haveGF = false; 
	fmt.Printf("You guys have GF = %t \n", haveGF)
	fmt.Printf("%s has GF = %t \n", myName, haveGF)
	
}

// thank you 
// all the very best 