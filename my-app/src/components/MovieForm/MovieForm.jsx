// Här hanteras input för titel och betyg.
//Här ska man validera att dessa är ifyllda. 
import { useState } from "react";
import "./MovieForm.css";

function MovieForm() {
    
    const [movieTitel, setMovieTitel ] = useState("");
    const [gradeMovie, setGradeMovie] = useState("0");

    
    function handleSubmit() {
        
        if(movieTitel === "" || gradeMovie === "0"){
            alert("Ange en filmtitel och betyg!")
        } else {
            alert("Filmen har lagts till!")
            return;
        }

    }

    return (
        <form onSubmit={handleSubmit}>
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

            <button type="submit">Spara film</button>

        </form>
     
    );
}

export default MovieForm; 