import { useState } from "react";
import { FaBell, FaUser, FaPlay, FaTimes} from 'react-icons/fa';
import Stars from './Stars';
import Review from "./Review";
import ReviewForm from "./ReviewForm";



const Movie = ({ displayCurrentMovie, dashboard, allMovies , newRating}) => {
    
    const mainDashboard = dashboard;

    // Main component start 
    const handleOpenModal = () => {
        const Modal = document.querySelector('[data-modal]');
        Modal.className += ( Modal.className.includes('openDialog') ? '' :  ' openDialog');
    };

    const handleCloseModal = () => {
        const Modal = document.querySelector('[data-modal]');
        Modal.className = 'modal';
    };
    //  Main component end


    const newlyUpdatedMovies =  (id) => {

        const movies = allMovies;
        movies.forEach(movieElement => {
            if(movieElement.id == id){
                movieElement.status = 'active';
            }else {
                movieElement.status = 'inactive';
            }
        });
        return [...movies];
    };




    if(mainDashboard){
        return ( 
            <main className="main">
                {allMovies.map((movie) =>(
                    <div className='movie__wrapper' key={movie.id}>
                        <div className="movie-detail" >
                            <h1 className="movie__title"> {movie.title} </h1>
                            
                            <div className="movie__ratings">
                                <h4> <Stars newRating={false}/> </h4>
                                <h4> 4.7(lmbd)</h4>
                                <h4 className="movie__pg">PG</h4>
                                <h4 className="movie__duration"> {movie.duration} </h4>
                            </div>
                            <div className="movie__synopsis">
                                <h4>desctiption of movie {movie.description} </h4>
                            </div>
                            <h4><span>Tags:</span> {movie.tags} </h4>
                            <div className="rate-reviews">
                               <button className='btn rate-reviews__btn allReviews openModal' onClick={handleOpenModal}> All Reviews </button>
                            </div>
                            <button className="movie__playBtn" > < FaPlay /> Play Now</button>
    
                        </div>
    
                        <div className="movie-trailer">
                            <div className="trailer__btn">
                                <  FaPlay /> 
                            </div>
                            <div className="trailer__text">Watch Trailer</div>
                        </div>
    
                        <dialog data-modal className='modal'>
                            <span className="close"  onClick={handleCloseModal}> <FaTimes/> </span>
                            < ReviewForm  movieID={movie.id} />
                            <h2> REVIEWS</h2>
                            <div className="reviewList">
                                < Review />
                            </div>
                        </dialog>
                        
                    </div>
                ))}
               
            </main>
         );
    }

    return (
        <div className="movieList">
            {allMovies.map((movie) => ( movie.status === 'active' ?
                <a href="#" className="movieItem" key={movie.id}>
                    <h3 className="movieItem__title">{movie.title}</h3>
                    <h5 className="movieItem__duration"> {movie.duration} </h5>
                    <button className="movieItem__btn">Play Now</button>
                </a> : 
                <a href="#" className="movieItem" onClick={() => displayCurrentMovie(newlyUpdatedMovies(movie.id))} key={movie.id}>
                    <h3 className="movieItem__title">{movie.title}</h3>
                    <h5 className="movieItem__duration"> {movie.duration} </h5>
                    <button className="movieItem__btn">Play Now</button>
                </a>     
            ))}
       </div>
    );
}
 
export default Movie;