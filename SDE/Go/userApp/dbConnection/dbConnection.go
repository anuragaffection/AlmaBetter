package dbConnection 

import (
	"fmt"
	"log"
	"context"
	"go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
	"userApp/models/userModels"
)


// making  ctx global variable 
var collection *mongo.Collection
var ctx = context.TODO()

func init() {
	// uri assign 
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/")

	// connecting 
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// check connection
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Connected to MongoDB!")

	collection = client.Database("gouserdb").Collection("users")

}



func AddUserInDB(user userModels.User) {
   
    // Insert the user document into the collection
    _, err := collection.InsertOne(context.Background(), user)

	// if err happen in inserting 
	if err != nil {
		log.Fatal("error in add user db = %v" , err)
	}
}





/*
-- init() = special function from go 
-- Ping()
-- context.TODO() vs context.Background()

*/