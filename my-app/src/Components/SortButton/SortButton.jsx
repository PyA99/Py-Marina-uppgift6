function SortButton ({ movies }) {
    return (
        <div>
            <button onClick={() => onSort("rating")}>Sortera efter betyg</button>
            <button onClick={() => onSort("title")}>Sortera alfabetiskt</button>
        </div>
    )
}

export default SortButton;
