package main 

// package importing
import (
    "fmt"

	"log"
	"context"

	"go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)




// mongodb connections
var collection *mongo.Collection
var ctx = context.TODO()

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



// movie model or structure 
type Movie struct {
	ID    string `json:"id"`
	Title string `json:"title"`
}


// to add movie to db
func addMovie(id, title string) {

	movie := Movie{
		ID:    id,
		Title: title,
	}

	_, err := collection.InsertOne(ctx, movie)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Movie added successfully!")
}




// entry point 
func main () {
    fmt.Println("Hello From Go")

	// callig addMovie 
	addMovie("1", "Captain America")
}