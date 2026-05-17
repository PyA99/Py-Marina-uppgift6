import starIcon from "../../assets/star.png";
import deleteIcon from "../../assets/delete.png";

function MovieItem({ movie, onDelete }) {
    const stars = [];
    for (let i = 0; i < movie.rating; i++) {
        stars.push(i)
    }

    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            
            <div className="stars">
                {stars.map((star, i) => (
                    <img key={i} src={starIcon} alt="stjärna" />
                ))}
            </div>

            <button onClick={() => onDelete(movie.id)}>
                <img src={deleteIcon} alt="Ta bort" />
            </button>
        </div>
    );
}

export default MovieItem;