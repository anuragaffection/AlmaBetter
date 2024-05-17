package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
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

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello From Go \n")
	fmt.Fprintf(w, "You are on %s route", r.URL.Path)
}

// Movie struct
type Movie struct {
	ID    string `json:"id"`
	Title string `json:"title"`
}
// `json.id` , `json.title` are tags that provide additional information about variable 

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

// api to get all movies
func getAllMovies(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// Define a slice to store the decoded documents
	var movies []Movie

	// Find all movies in the collection
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	// Iterate through the cursor and decode each document
	for cursor.Next(ctx) {
		var movie Movie
		if err := cursor.Decode(&movie); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		movies = append(movies, movie)
	}

	// Check for cursor errors after iterating
	if err := cursor.Err(); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Encode the movies slice as JSON and write it to the response
	if err := json.NewEncoder(w).Encode(movies); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func main() {
	addMovie("1", "The Shawshank Redemption")
	fmt.Println("Your Server is running on http://localhost:8000")
	http.HandleFunc("/", handler)
	http.HandleFunc("/movies", getAllMovies)
	http.ListenAndServe(":8000", nil)
}

/*
--- 1. fmt comes with go
--- 2. net/http comes with go
*/

/*
--- 1. fmt ,       for formattting
--- 2. net/http ,  for creating server
*/

/*

The fmt.Fprintf function expects at least two arguments:
1. an io.Writer (w)
2. a format specifier
3. optional arguments.

*/

/*
Go Notes 
--- Go uses explicit error handling.
--- Each database operation typically returns an error, which you need to handle.
---  In Go, we use a cursor to iterate over the results of a query.

*/
