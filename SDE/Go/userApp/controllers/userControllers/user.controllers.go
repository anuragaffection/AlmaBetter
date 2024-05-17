
package userControllers

import (
	"fmt"
	"net/http"
	"userApp/models/userModels"
	"userApp/dbConnection"
)


func AddUserTest (id, first_name, last_name, email, password string) {
	user := userModels.User{
		ID : id,
		FirstName : first_name, 
		LastName : last_name, 
		Email : email,
		Password : password,
	}
	dbConnection.AddUserInDB(user)
}


func AddUser (w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf( w, "This is going to be post routes ")
}

func GetUser (w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "You will get all the user here")
}