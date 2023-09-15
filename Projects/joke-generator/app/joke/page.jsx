import React from 'react'

export default function page() {


  const jokes = [
    {
      "id": 1,
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field."
    },
    {
      "id": 2,
      "joke": "What do you call a fish with no eyes? Fsh!"
    },
    {
      "id": 3,
      "joke": "Why did the bicycle fall over? Because it was two tired."
    },
    {
      "id": 4,
      "joke": "What do you call a lazy kangaroo? A pouch potato."
    },
    {
      "id": 5,
      "joke": "Why did the golfer wear two pairs of pants? In case he got a hole in one."
    },
    {
      "id": 6,
      "joke": "What do you call a fish with no eyes? Fsh!"
    },
    {
      "id": 7,
      "joke": "Why did the coffee go to the police? It got mugged."
    },
    {
      "id": 8,
      "joke": "Why did the skeleton go to the party alone? Because he had no body to go with."
    },
    {
      "id": 9,
      "joke": "What do you call a fish with no eyes? Fsh!"
    },
    {
      "id": 10,
      "joke": "Why did the bicycle fall over? Because it was two tired."
    },
    {
      "id": 11,
      "joke": "What do you call a bear with no teeth? A gummy bear."
    },
    {
      "id": 12,
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field."
    },
    {
      "id": 13,
      "joke": "What do you call a fish with no eyes? Fsh!"
    },
    {
      "id": 14,
      "joke": "Why did the golfer wear two pairs of pants? In case he got a hole in one."
    },
    {
      "id": 15,
      "joke": "What do you call a lazy kangaroo? A pouch potato."
    },
    {
      "id": 16,
      "joke": "Why did the coffee go to the police? It got mugged."
    },
    {
      "id": 17,
      "joke": "Why did the skeleton go to the party alone? Because he had no body to go with."
    },
    {
      "id": 18,
      "joke": "What do you call a fish with no eyes? Fsh!"
    },
    {
      "id": 19,
      "joke": "Why did the bicycle fall over? Because it was two tired."
    },
    {
      "id": 20,
      "joke": "What do you call a bear with no teeth? A gummy bear."
    },
    {
      "id": 21,
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field."
    },
    {
      "id": 22,
      "joke": "What do you call a fish with no eyes? Fsh!"
    },
    {
      "id": 23,
      "joke": "Why did the golfer wear two pairs of pants? In case he got a hole in one."
    },
    {
      "id": 24,
      "joke": "What do you call a lazy kangaroo? A pouch potato."
    },
    {
      "id": 25,
      "joke": "Why did the coffee go to the police? It got mugged."
    },
    {
      "id": 26,
      "joke": "Why did the skeleton go to the party alone? Because he had no body to go with."
    }
  ]



  return (


    <div className="container min-w-full bg-gray-700 p-8">


      <h1 className="text-3xl font-semibold mb-4 text-white">Jokes</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {
          jokes.map((eachJoke) => (

            <div key={eachJoke.id} className="bg-gray-800 rounded-lg shadow-lg p-4">

              <p className="text-lg text-indigo-400">{eachJoke.joke.split('?')[0]} ? </p>
              <p className='text-lg text-gray-200'> {eachJoke.joke.split('?')[1]} </p>
            </div>
          ))
        }

      </div>


    </div>
  )
}
