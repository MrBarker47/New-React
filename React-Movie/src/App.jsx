import { useState, useEffect } from 'react';
import './App.css'


import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default App() {
  //Constant with your API Key
const apiKey = "e2c8be7a";

//State to hold movie data
const [movie, setMovie] = useState(null);

//Function to get movies
const getMovie = async(searchTerm) => {
  //Make fetch request and store response 
  const response = await fetch(
    `http://wwww.omdbapi.com/?apikey=${apiKey}&t${searchTerm}`
  );

  //Parse JSON response into a JavaScript object
  const data = await response.json();
  //Set the Movie state to the received data
  setMovie(data)
};

return (
    <div className='App'>
    <Form moviesearch={getMovie} />
    <MovieDisplay />
    </div>
  );
}
