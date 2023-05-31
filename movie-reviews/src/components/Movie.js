


const Movie = ({allMovies}) => {
    // const allMovies = props.allMovies;

    return (
        <div className="movieList">
            {allMovies.map((movie) => (
                <div className="movieItem" key={movie.id}>
                    <h3 className="movieItem__title">{movie.title}</h3>
                    <h5 className="movieItem__duration"> {movie.duration} </h5>
                    <button className="movieItem__btn">Play Now</button>
                </div>
            ))}
       </div>
    );
}
 
export default Movie;