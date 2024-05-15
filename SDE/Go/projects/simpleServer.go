package main

import (
	"fmt"      // Import fmt for formatted I/O
	"net/http" // Import net/http package for HTTP server functionality
)

// handler is a function that handles HTTP requests.
// It takes a ResponseWriter interface and a pointer to a Request struct as arguments.
func handler(w http.ResponseWriter, r *http.Request) {
	// Write a response to the ResponseWriter.
	// In this case, we use Fprintf to format a string and write it to the ResponseWriter.
	fmt.Fprintf(w, "Hello, you've requested: %s\n", r.URL.Path)
	// fmt.Println(w)
}

func main() {
	// Register the handler function to handle all requests to the root URL ("/").
	// handleFunc, inbuilt
	http.HandleFunc("/", handler)

	// Print a message to indicate the server is running.
	fmt.Println("Server is running on http://localhost:8080")

	// Start the HTTP server on port 8080.
	// ListenAndServe listens on the TCP network address (in this case ":8080") and
	// then calls the Serve method on the provided handler (in this case, nil means to use the default handler, which we've set with http.HandleFunc).
	// ListenAndServe always returns a non-nil error.
	// If it returns an error, it will be logged using the log package's Println function and then the function will return.
	// ListenAndServe inbuilt
	http.ListenAndServe(":8080", nil)
}
