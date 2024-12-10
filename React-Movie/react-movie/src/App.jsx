import { useState, useEffect } from 'react'
import './App.css'

import MovieDisplay from './components/MovieDisplay';
import Form from "./components/Form"



  export default function App() {
    // Constant with your API Key
      const apiKey="e2c8be7a";
      
      //State to hold movie data
      const [movie, setMovie] = useState(null);

      //Function to get movies
      const getMovie = async(searchTerm) => {
        //Make fetch request and store the response 
        const response = await fetch(
          `http://www.omdbapi.com/?apiKey=${apiKey}&t=${searchTerm}`
        );
        //Parse JSON response into a Javascript object
        const data = await response.json();
        //Set the Movie state to the received data
        setMovie(data);
      };






      useEffect(() => {
        getMovie("Clueless")
      }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>  
  );
}


const getMovie = async(searchTerm) => {
	try {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
		);
		const data = await response.json();
		setMovie(data);
	} catch(e) {
		console.error(e)
	}
}