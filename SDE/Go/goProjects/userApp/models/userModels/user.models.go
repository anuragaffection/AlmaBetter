package userModels 


type User struct {
	ID        string    `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
}



/*

`json:""`
-- are tags that provide additional information about variable or field 
-- also used to map to mongodb fields 
-- also for serializing and deserializing data. 

mongodb
-- in mongodb our field will be first_name, last_name, email, password 
-- for confirmation check compass 
*/