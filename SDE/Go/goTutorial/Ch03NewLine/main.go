package main

import (
	"fmt"
)

func AboutCurlyBraces() {
	fmt.Println("This is write way to use curly braces")
	fmt.Println("The start of curly brackes, must not start with new line")
}

// func AboutCurlyBraces2()
// {
// fmt.Println("this will gives syntax error, our code will not execute ")
// }

func main() {
	fmt.Println("Hello , We are going about new line ")
	fmt.Println("this statements on new line ")
	fmt.Println("this is also on new line")
	AboutCurlyBraces()
}

/*
-- curly brackes must comes after Function brackets in go
-- saving the code, automatically making  it into new line
*/

/*
-- In go , hitting enter keywords, switch to next line
-- also, we can switch to new line, by using semicolon ";"
*/

// thank you, that's all for this chapter
