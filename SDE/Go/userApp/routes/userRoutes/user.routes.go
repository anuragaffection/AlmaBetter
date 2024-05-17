package userRoutes

import (
	"net/http"
	"userApp/controllers/userControllers"
)

func SetupUserRoutes (){
	userControllers.AddUserTest("123", "anurag", "affecton", "anuragaffection.contact@gmail.com", "test123")
	http.HandleFunc("/user/get", userControllers.GetUser)
	http.HandleFunc("/user/add", userControllers.AddUser)
}