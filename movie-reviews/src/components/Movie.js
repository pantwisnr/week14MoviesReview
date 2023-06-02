import { useState } from "react";

const Movie = ({allMovies , setAllMovies , handleChangeWord }) => {
    // console.log(setAllMovies)
    const [allMoviesStatus, setAllMoviesStatus] = useState(allMovies);

    const handleStatus = (id) => {
        const movies = allMoviesStatus;
        movies.forEach(movieElement => {
            if(movieElement.id == id){
                movieElement.status = 'active';
            }else {
                movieElement.status = 'inactive';
            }
        });
        setAllMovies([...movies]);
        // let activeMovie = movies.filter((movie) => movie.id === id);
        
        // console.log(activeMovie);
        // console.log(movies);


    };

    const handleTestClickedMovie = () => {

        const movies = allMovies;

        movies.forEach(movieElement => {
            if(movieElement.id == 3){
                movieElement.status = 'active';
            }else {
                movieElement.status = 'inactive';
            }
        });
        // console.log([...movies]);
        return setAllMovies([...movies]);
    };

    const handleTryFUnc = () =>{
        return 'Updated the previous word';
    };

    // const handleUpdatedMovies = (id) => {

    //     const movies = allMovies;

    //     movies.forEach(movieElement => {
    //         if(movieElement.id == id){
    //             movieElement.status = 'active';
    //         }else {
    //             movieElement.status = 'inactive';
    //         }
    //     });
    //     setAllMovies([...movies]);
    // };

    return (
        <div className="movieList">
            {allMovies.map((movie) => (
                // <div className="movieItem" onClick={() => handleStatus(movie.id) } key={movie.id}>
                <div className="movieItem" onClick={() => handleChangeWord(handleTryFUnc) } key={movie.id}>
                    <h3 className="movieItem__title">{movie.title}</h3>
                    <h5 className="movieItem__duration"> {movie.duration} </h5>
                    <button className="movieItem__btn">Play Now</button>
                </div>
            ))}
       </div>
    );
}
 
export default Movie;