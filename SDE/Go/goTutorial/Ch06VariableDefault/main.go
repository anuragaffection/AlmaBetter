package main

import (
	"fmt"
)

func main() {
	var myName string
	var myAge int
	var myGirlFriend bool

	// if we don't specify the value to variable , it will take default value
	// for string - empty
	// for int - 0
	// for bool - false

	fmt.Println("Default value of Variable ")
	fmt.Println(myName)       // empty
	fmt.Println(myAge)        // 0
	fmt.Println(myGirlFriend) // false
}
