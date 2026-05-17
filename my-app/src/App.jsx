import { useState } from 'react'

import MovieForm from "./components/MovieForm/MovieForm";
import MovieList from "./components/MovieList/MovieList";
//import SortButton from "./components/SortButton/SortButton";

import './App.css'

function App() {
  const [movies, setMovies] = useState([])

// Vi skapar en ny array med tidigare filmer och lägger till den nya filmen sist i arrayen. 
function addMovie(movie){
  console.log(movie)
  setMovies(currentMovies => [...currentMovies, movie]);
}


function deleteMovie(id) {
  setMovies(prev =>
    //Tar den gamla listan och tar bort filmen med rätt id, och ersätt state med den nya listan”
    prev.filter(movie => movie.id !== id)
  );
}

  return (
        <div className="MovieContainer">
          <h1>Min filmlista</h1>
          <MovieForm saveMovieToList={addMovie}/>
          
          <MovieList movies={movies} onDelete={deleteMovie}/>
        </div>
  );
}

export default App
