package main

import (
	"fmt"
)

/*
-- we can declare variable using two ways
-- 1. using var
-- 2. :=
*/

/*
-- 1. var , is global  scope
-- 2. := , is function scoped only, we can't use outside the function
*/

// this will gives error
// as we can't use variable with := declartion outside the functin
// myCity := "New Moon"

func main() {

	// way 01
	var myName = "Anurag"
	var myNothing string = "GF" // we can define type , when using var

	// way 02
	myFullName := "Anurag Affection"
	// myNothing2 string := "GF" // we can't define type, when using :=

	fmt.Println(myName)
	fmt.Println(myNothing)
	fmt.Println(myFullName)

	fmt.Println("Variable Declaration")
}

// thank you
// that's all for this chapter
