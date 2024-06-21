package main

import (
	"fmt"
)

func main() {
	fmt.Println("Multiple Variable Declarations in Go")

	// here, we haven't defined  the type
	// so, we can create multipe type variable in single line
	var myName, myAge, myGf = "Anurag", 21, false
	fmt.Println(myName)
	fmt.Println(myAge)
	fmt.Println(myGf)
	fmt.Println()

	/*
		-- this will gives error,
		-- the reason, all the variable value must be string
		-- because here our type is string
		-- and in one line, we can define only oneType, if type is define
		var yourName, yourAge, yourGf string = "Captain ", 21, true
	*/

	// here, type of all variable is string
	var yourName, yourAge, yourGf string = "Captain", "21", "true"
	fmt.Println(yourName)
	fmt.Println(yourAge)
	fmt.Println(yourGf)
	fmt.Println()

	// her, type of all variable in int
	var number, favNumber int = 21, 1947
	fmt.Println(number)
	fmt.Println(favNumber)
	fmt.Println()

	// variable declaration in block with type
	var (
		primeNumber  int    = 3
		myGirlFriend bool   = false
		myImgGfName  string = "Natasha"
	)
	fmt.Println(primeNumber)
	fmt.Println(myGirlFriend)
	fmt.Println(myImgGfName)
	fmt.Println()

	// varible declaration in block without type
	var (
		ourCountry = "India"
		ourGalaxy  = "Andromeda"
		ourGDP     = 56584287451294605
	)
	fmt.Println(ourCountry)
	fmt.Println(ourGalaxy)
	fmt.Println(ourGDP)
	fmt.Println()
}

// thank You
// that's all for this chapter
