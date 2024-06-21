package main

import (
	"fmt"
)

/*
   -- Apart from from var & :=, we have const to declare variable
   -- variable declartion with const, cannot be re-assign

*/

func main() {

	var number = 10
	number = 20
	fmt.Println(number)
	// we can re-assign var variable

	const myName = "Anurag"
	// myName = "Anurag Affection"
	// gives error, as we cannot re-assign const variable
	fmt.Println(myName)

	// these are typed constant , we have defined their type
	const myFullName string = "Anurag Affection"
	const haveGF bool = false
	fmt.Printf("person %v has Gf = %v\n", myFullName, haveGF)

	// these are un-typed constant,
	// we have not defined their type
	const myCountry = "India"
	const primeNumber = 2
	fmt.Printf("%v %v\n", myCountry, primeNumber)

	fmt.Println("Constant in Go")
}

// thank you
// that's all for today

// we will explore Print formating in details on later part of video
