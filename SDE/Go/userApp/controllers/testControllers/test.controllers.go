package testControllers 

import (
	"fmt"
	"net/http"
)


func TestHomeMessage (w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from home route")
}


func TestMessageController (w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Hello from /test routes")
}