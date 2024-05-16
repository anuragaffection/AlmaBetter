package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"encoding/json"
	"math/rand"
	"strconv"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// movie struct 
type Movie struct {
	ID       string   `json:"id"`
	Isbn     string   `json:"isbn"`
	Title    string   `json:"title"`
	Director *Director `json:"director"`
}

// director struct 
type Director struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
}

// MongoDB configuration
var client *mongo.Client
var collection *mongo.Collection
var ctx = context.TODO()

func init() {
	// Set client options
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	// Connect to MongoDB
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	// Get collection
	collection = client.Database("test").Collection("movies")
}




// get movies 
func getMovies(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// Find all movies
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		log.Fatal(err)
	}
	defer cursor.Close(ctx)

	var movies []Movie
	for cursor.Next(ctx) {
		var movie Movie
		if err := cursor.Decode(&movie); err != nil {
			log.Fatal(err)
		}
		movies = append(movies, movie)
	}

	json.NewEncoder(w).Encode(movies)
}






func main() {
	r := mux.NewRouter()

	r.HandleFunc("/movies", getMovies).Methods("GET")

	fmt.Printf("Starting the server\n")
	log.Fatal(http.ListenAndServe(":8000", r))
}
