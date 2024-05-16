package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello From Go \n")
	fmt.Fprintf(w, "You are on %s route", r.URL.Path)
}

func main() {
	fmt.Println("Your Server is running on http://localhost:8000")
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8000", nil)

}

/*
--- 1. fmt comes with go
--- 2. net/http comes with go
*/

/*
--- 1. fmt ,       for formattting
--- 2. net/http ,  for creating server
*/

/*

The fmt.Fprintf function expects at least two arguments:
1. an io.Writer (w)
2. a format specifier
3. optional arguments.

*/
