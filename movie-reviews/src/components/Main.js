import { FaBell, FaUser, FaPlay, FaTimes} from 'react-icons/fa';
import Stars from './Stars';
import MovieList from './MovieList';

const Main = (props) => {
    // console.log('props from Main', props);
    const allMovies = props.allMovies;

    const handleOpenModal = () => {
        const Modal = document.querySelector('[data-modal]');
        // Modal.showModal();
        Modal.className += ( Modal.className.includes('openDialog') ? '' :  ' openDialog');
    };

    const handleCloseModal = () => {
        const Modal = document.querySelector('[data-modal]');
        // Modal.close();
        Modal.className = 'modal';
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
        <main className="main">
            {allMovies.map((movie) =>(
                <div className='movie__wrapper' key={movie.id}>
                    <div className="movie-detail" >
                        <h1 className="movie__title"> {movie.title} </h1>
                        <div className="movie__ratings">
                            <h4> <Stars/> </h4>
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
                        <h2>USERS REVIEWS</h2>
                        <div className="ratings">
                        <h4>
                            <input type="number" max={5} min={0} placeholder='ratings' />
                            <button>rate movie</button>
                        </h4>
                        <h4>
                            <input type="text" placeholder='add review' />
                            <button>Add review</button>
                        </h4>
                        </div>
                        <div className="reviewList">
                            <p>review 1</p>
                            <p>review 2</p>
                            <p>review 3</p>
                            <p>review 4</p>
                        </div>
                    </dialog>
                    
                </div>
            ))}
           
        </main>
     );
}

export default Main;