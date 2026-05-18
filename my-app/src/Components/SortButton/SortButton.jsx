import "./SortButton.css";

function SortButton ({ onSort }) {
    return (
        <div>
            <button className="rating-button" onClick={() => onSort("rating")}>Sortera efter betyg</button>
            <button className="ABC-button" onClick={() => onSort("title")}>Sortera alfabetiskt</button>
        </div>
    )
}

export default SortButton;
