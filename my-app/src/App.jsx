import { useState } from 'react'

import MovieForm from "./Components/MovieForm/MovieForm";
import MovieList from "./Components/MovieList/MovieList";
import SortButton from "./Components/SortButton/SortButton";

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

function sortMovies(type) {
  const sortedMovies = [...movies]; //skapar en kopia av filmlistan

  if (type === "title") {
    sortedMovies.sort((a, b) =>  //jämnför två filmer åt gången
      a.title.localeCompare(b.title) //localeCompare jämnför alfabetiskt
    );
  }

  if (type === "rating") {
    sortedMovies.sort((a, b) =>
      b.rating - a.rating //b - a gör att ordningen startar på högsta värdet
    );
  }

  setMovies(sortedMovies);
}

  return (
        <div className="MovieContainer">
          <h1>Min filmlista</h1>
          <h2> Lägg till en film </h2>
          <hr></hr>
          <MovieForm saveMovieToList={addMovie}/>
          <SortButton onSort={sortMovies}/>
          <MovieList movies={movies} onDelete={deleteMovie}/>
        </div>
  );
}

export default App
