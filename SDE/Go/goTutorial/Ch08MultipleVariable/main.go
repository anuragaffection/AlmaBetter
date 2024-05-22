package main

import (
	"fmt"
)

func main() {
	fmt.Println("Multiple Variable Declarations in Go")

	// here , we haven't defined  the type
	var myName, myAge, myGf = "Anurag", 21, false
	fmt.Println(myName)
	fmt.Println(myAge)
	fmt.Println(myGf)

	/*
		-- this will gives error,
		-- the  reason, all the variable value must be string
		-- because here our time is string
		-- and in one line, we can define only oneType
		var yourName, yourAge, yourGf string = "Captain ", 21, true
	*/

	// here, type of all variable is string
	var yourName, yourAge, yourGf string = "Captain", "21", "true"
	fmt.Println(yourName)
	fmt.Println(yourAge)
	fmt.Println(yourGf)

	// her, type of all variable in int
	var number, favNumber int = 21, 1947
	fmt.Println(number)
	fmt.Println(favNumber)

	// variable declaration in block
	var (
		primeNumber  int    = 3
		myGirlFriend bool   = false
		myImgGfName  string = "Natasha"
	)
	fmt.Println(primeNumber)
	fmt.Println(myGirlFriend)
	fmt.Println(myImgGfName)
}

// thank You
// that's all for this chapter
