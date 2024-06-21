// -- package declration 
// -- In Go, any executable code belongs to the main package.
package main 


// fmt - formatting 
// net/http - for server & http 
// 
import (
	"fmt"
	"net/http"
	"userApp/routes/testRoutes"
	"userApp/routes/userRoutes"
	
)




// entry points  
func main () {
	fmt.Println("Hello From Go")

	// routes setup 
	userRoutes.SetupUserRoutes();
	testRoutes.SetupTestRoutes();


	// server running 
	http.ListenAndServe(":8080", nil)
}