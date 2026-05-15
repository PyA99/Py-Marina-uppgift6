import { useState } from 'react'

import MovieForm from "./components/MovieForm/MovieForm";
import MovieList from "./components/MovieList/MovieList";
//import SortButton from "./components/SortButton/SortButton";

import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  return (
        <div className="MovieContainer">
          <h1>Min filmlista</h1>
          <MovieForm />
          
        </div>
  );
}

export default App
