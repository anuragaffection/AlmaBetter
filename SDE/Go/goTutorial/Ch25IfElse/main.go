package main 

import "fmt"
import "math"

func main()  {
	fmt.Println("if else statements in go")

	var age int = 2;

	if (age >= 18){
		// this block will execute , if condition is true 
		fmt.Println("You are ready to vote");
	} else {
		// this will be execute, if above block,  condition is false
		fmt.Printf("You have to wait %.f years to vote\n", math.Abs(float64(age - 18)));
	}


	// problem with writing `else` in next line 
	// writing else in next line will give error 
	// keep in mind to write it with closing braces of previous block
	var number int = 20;
	if (number % 2 == 0){
		fmt.Printf(" %d is even\n", number)
	}else {
		fmt.Printf("Number is odd\n")
	}

	var number2 int = 22;
	if number2 % 2 == 0{
		fmt.Printf(" %d is even\n", number2)
	}else {
		fmt.Printf("Number is odd\n")
	}

	var name string = "anurag"
	if name == "anurag"{
		fmt.Println("Name is matching")
	}


	/**
	   notes 
	   -- = , is assignment operator 
	   -- ==, is comparison operator
	*/

}

// thank you 
// all the very best 
// that's all for this chapter 