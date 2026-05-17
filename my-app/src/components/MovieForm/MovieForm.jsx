// Här hanteras input för titel och betyg.
//Här ska man validera att dessa är ifyllda. 
import { useState } from "react";
import "./MovieForm.css";

function MovieForm( {saveMovieToList} ) {
    const [movieTitel, setMovieTitel ] = useState("");
    const [gradeMovie, setGradeMovie] = useState("0");

    
    function handleSubmit(e) {
        console.log("submit fungear");
        e.preventDefault();
        
        if(movieTitel === "" || gradeMovie === "0"){
            alert("Ange en filmtitel och betyg!")
        } else {
            saveMovieToList({
                id: Date.now(), //Vi skapar ett id till filmen som lagts till genom datum och milisekunder som blir till en sträng. 
                title: movieTitel,
                rating: gradeMovie
            });
            setMovieTitel("");  //här nollställer vi fälten efter filmen lagts till.
            setGradeMovie("0");
            alert("Filmen har lagts till!")
            return;
        }

    }

    return (
        <form className="movie-form" onSubmit={handleSubmit}>
            <input 
               id="movie-titel" //vi använder detta id till vår css. 
               type="text"  //här anger vi vilken typ av input det är.
               onChange={e => setMovieTitel(e.target.value)} //varje gång användaren skriver något kör vi denna eventhandlern. 
               value={movieTitel}
               placeholder="Ange film titel..."
            />

            <select
                id="movie-grade"
                type="number"
                onChange={e => setGradeMovie(e.target.value)}
                value={gradeMovie}
                
            >
                <option value="0">Ange betyg...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>    

            <button className="save-button" type="submit">Spara film</button>

        </form>
     
    );
}

export default MovieForm; 