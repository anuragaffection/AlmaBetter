package main

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// mongodb connections
// making collection, ctx global variable 
var collection *mongo.Collection

// context - cancellation 
var ctx = context.TODO()


// init = is special function in go 
// init = called before main 
func init() {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/")
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

	collection = client.Database("testingWithGo").Collection("movies")
}




// entry points 
func main() {
	fmt.Println("MongoDb with Go")
}




