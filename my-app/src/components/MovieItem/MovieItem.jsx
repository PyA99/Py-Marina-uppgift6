function MovieItem({ movie, onDelete }) {
    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.rating}</p>
            <button onClick={() => onDelete(movie.id)}>
                Delete
            </button>
        </div>
    );
}

export default MovieItem;