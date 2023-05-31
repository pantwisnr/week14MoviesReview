import { FaBell, FaUser, FaPlay, FaTimes} from 'react-icons/fa';
import Stars from './Stars';
import MovieList from './MovieList';

const Main = (props) => {
    // console.log(props);
    
    // < Movie allMovies={allMovies.filter((movie) => movie.img === 'new' )}/>

    return ( 
        <main className="main">
           <div className="movie-detail">
                <h1 className="movie__title"> Sand Dust</h1>
                <div className="movie__ratings">
                    <h4> <Stars/> </h4>
                    <h4> 4.7(lmbd)</h4>
                    <h4 className="movie__pg">PG</h4>
                    <h4 className="movie__duration"> 00:00:00</h4>
                </div>
                <div className="movie__synopsis">
                    <h4>desctiption of movie</h4>
                </div>
                <h4><span>Tags:</span> Adventure, Action, Horror</h4>
                <div className="rate-reviews">
                    <buttton className='btn rate-reviews__btn allReviews openModal'>All Reviews</buttton>
                    <buttton className='btn rate-reviews__btn addNewrating'> rate Movie </buttton>
                    <buttton className='btn rate-reviews__btn addNewReview'>Add review</buttton>
                </div>
                <button className="movie__playBtn"> < FaPlay /> Play Now</button>

           </div>
           <div className="movie-trailer">
                <div className="trailer__btn">
                    <  FaPlay /> 
                </div>
                <div className="trailer__text">Watch Trailer</div>
           </div>

            <dialog className="modal">
                <span className="close" > <FaTimes/> </span>
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

            

        </main>
     );
}

export default Main;