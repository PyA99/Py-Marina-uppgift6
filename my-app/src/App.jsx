import { useState } from 'react'

import MovieForm from "./components/MovieForm/MovieForm";
import MovieList from "./components/MovieList/MovieList";
import SortButton from "./components/SortButton/SortButton";

import './App.css'

function App() {
  const [movies, setMovies] = useState([])


function deleteMovie(id) {
  setMovies(prev =>
    //Tar den gamla listan och tar bort filmen med rätt id, och ersätt state med den nya listan”
    prev.filter(movie => movie.id !== id)
  );
}

  return (
        <div className="MovieContainer">
          
          <MovieList movies={movies} onDelete={deleteMovie}/>
        </div>
  )
}

export default App
