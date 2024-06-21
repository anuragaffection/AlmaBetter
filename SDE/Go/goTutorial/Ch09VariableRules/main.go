package main

import "fmt"

/*
  Rules for Variable Names in go
  1. Must begin with a characters (a-z), (A-z), or underscore(_)
  2. Must not begin with number or any special characters like @, #, $, %, ^, & and more.
  3. Varaible names contains AlphaNumeric, (alphabets + number)
  4. special keywords of Go are not allowed .
  5. variable names are case sensitive
  6. spaces are not allowed in variable name
*/

func main() {
	// types of variable names allowed
	var myName = "Anurag"
	var MyName = "Affection"
	var myAgeAfter20 = 20

	fmt.Println(myName)
	fmt.Println(MyName)
	fmt.Println(myAgeAfter20)

	/*
		-- types of variable names not allowed
		var 20Age = 46;
		var my name = "anurag"
		var if = "false"
		var @MyName = "anurag"
		var my@specailName = "anurag"

	*/

	fmt.Println("Rules for variable naming in Go ")
}

// thank you
// that's all for this chapter
