package testRoutes

import (
	"net/http"
	"userApp/controllers/testControllers"
)



func SetupTestRoutes() {
	http.HandleFunc("/", testControllers.TestHomeMessage)
	http.HandleFunc("/test", testControllers.TestMessageController)
}