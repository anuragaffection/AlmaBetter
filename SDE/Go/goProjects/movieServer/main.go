package main 

import (
    "fmt"
    "log"
    "encoding/json"
    "math/rand"
    "net/http"
    "strconv"
    "github.com/gorilla/mux"
)


// movie struct 
type Movie struct {
    ID string `json:"id"`
    Isbn string `json:"isbn"`
    Title string `json:"title"`
    Director *Director `json:"director"`
}
// ID, Isbn, Title, Director    = are field of Moive, or like variable name 
// string, string, string, *Director    = are data types of variable
// `json:id` `json.isbn` `json.title` `json.director`   = are tags that provide additional information about variable 



/*
--- The json tag tells the encoding/json package how to encode and decode the field when converting a struct to JSON and vice versa.

--- 
*/




// director struct 
type Director struct {
    Firstname string `json:"firstname"`
    Lastname string `json:"lastname"`
}



// movies slice , like array 
var movies []Movie 



// get movies 
func getMovies (w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(movies)
}

// get movie by id 
func getMovieById ( w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for _, item := range movies {
		if item.ID == params["id"]{
			json.NewEncoder(w).Encode(item)
			return
		}
	}
}


// create movies 
func createMovie ( w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	var movie Movie
	err := json.NewDecoder(r.Body).Decode(&movie)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	movie.ID = strconv.Itoa(rand.Intn(10000000000))
	movies = append(movies, movie)
	json.NewEncoder(w).Encode(movie)
}

/*
--- rand.Intn(10000000000): This generates a random integer between 0 and 9999999999.
--- strconv.Itoa(): This function converts an integer to a string.


*/


// delete movie 
func updateMovie ( w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range movies {
		if item.ID == params["id"] {
			var movie Movie
			err := json.NewDecoder(r.Body).Decode(&movie)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			movie.ID = params["id"]
			movies[index] = movie
			json.NewEncoder(w).Encode(movie)
			return
		}
	}
	http.Error(w, "Movie not found", http.StatusNotFound)
}



// delete movies 
func deleteMovie ( w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index , item := range movies {
		if item.ID == params["id"] {
			movies = append(movies[:index], movies[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(movies)
}





func main () {
    r := mux.NewRouter()

	// adding movie to moives 
    movies = append(movies, Movie{
        ID: "1",
        Isbn : "438777",
        Title : "Captain America",
        Director : &Director{
            Firstname : "Steve",
            Lastname : "Rogers",
        },
    })

	// adding moive to movies 
    movies = append(movies, Movie{
        ID: "2",
        Isbn : "438767",
        Title : "Iron Man",
        Director : &Director{
            Firstname : "Tony",
            Lastname : "Stark",
        },
    })


    r.HandleFunc("/movies", getMovies).Methods("GET")
    r.HandleFunc("/movies/{id}", getMovieById).Methods("GET")
    r.HandleFunc("/movies", createMovie).Methods("POST")
    r.HandleFunc("/movies/{id}", updateMovie).Methods("PUT")
    r.HandleFunc("/movies/{id}", deleteMovie).Methods("DELETE")

    fmt.Printf("Starting the server")
    log.Fatal(http.ListenAndServe(":8000", r))
}
