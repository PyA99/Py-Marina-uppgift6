import MovieItem from "../MovieItem/MovieItem";

function MovieList({ movies, onDelete }) {
  const items = [];

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    items.push(
    // Skapar en MovieItem-komponent för varje movie i listan
    // movie={movie} skickar hela filmobjektet som props (argument)
    // key används av React för att hålla koll på listan
      <MovieItem key={movie.id} movie={movie} onDelete={onDelete}/>
    );
  }

  return <div>{items}</div>;
}

export default MovieList;