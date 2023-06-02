import { useState } from "react";
import Movie from "./Movie";
import Main from "./Main";

const MovieList = (props) => {
    
    const [allMovies, setAllMovies] = useState(
        [
            {
                title: 'Sand Dust',
                description: '',
                ratings: '3.5',
                tags: 'Adventure, Action',
                img: '',
                duration: `00hr :00mins`,
                id: 1,
                status: 'active',
                reviews: []
            },
            {
                title: 'Home Alone',
                description: '',
                ratings: '3.5',
                tags: 'Adventure, Action',
                img: '',
                duration: `00hr :00mins`,
                id: 2,
                status: 'inactive',
                reviews: []
            },
            {
                title: 'Spiderman 2',
                description: '',
                ratings: '3.5',
                tags: 'Adventure, Action',
                img: '',
                duration: `00hr :00mins`,
                id: 3,
                status: 'inactive',
                reviews: []
            },
            {
                title: 'Fast & Furious 9',
                description: '',
                ratings: '3.5',
                tags: 'Adventure, Action',
                img: '',
                duration: `00hr :00mins`,
                id: 4,
                status: 'inactive',
                reviews: []
            },
            {
                title: 'Hangover',
                description: '',
                ratings: '3.5',
                tags: 'Adventure, Action',
                img: 'new',
                duration: `02hr :30mins`,
                id: 5,
                status: 'inactive',
                reviews: []
            },
            {
                title: 'London has Fallen',
                description: '',
                ratings: '3.5',
                tags: 'Adventure, Action',
                img: '',      
                duration: `00hr :00mins`,
                id: 6,
                status: 'inactive',
                reviews: []
            },
        ]
    );
        
    const [oldtestUpdate, setTestUpdate] = useState('Test Updates')

    const handleTestClickedMovie = () => {

        const movies = allMovies;
        // let currentMovie = setAllMovies;
        // console.log(movies);
        // console.log(setAllMovies);
        
        movies.forEach(movieElement => {
            if(movieElement.id == 3){
                // console.log('before clicked',  movieElement.status);
                movieElement.status = 'active';
                // currentMovie = movieElement.status;
            }else {
                movieElement.status = 'inactive';
            }
        });
        console.log('after', [...movies]);
        setAllMovies([...movies]);
        // console.log('after clicked',  currentMovie);
    };

    const handleUpdatedMovies = () => {

        const movies = allMovies;

        movies.forEach(movieElement => {
            if(movieElement.id == 3){
                movieElement.status = 'active';
            }else {
                movieElement.status = 'inactive';
            }
        });
        setAllMovies([...movies]);
    };
    
    const handleSetMovies = (updatedMovie) => {
        setAllMovies(updatedMovie);
    };

    const sectionMain = props.sectionMain;

    if(sectionMain){
        return (
            <div className="allMovies">
                < Main  allMovies={allMovies.filter((movie) => movie.status === 'active' )}/>
                {/* <h3> {testUpdate} </h3> */}
                <button onClick={handleTestClickedMovie}>Update Movie</button>
            </div>
        );
    }
    return (
        <div className="allMovies">
             {/* <button onClick={handleTestClickedMovie}>Update Movie</button> */}
             <h3> {oldtestUpdate} </h3>
            < Movie  allMovies={allMovies} handleChangeWord={testUpdate => setTestUpdate(testUpdate)} handleUpdatedMovies={updatedMovies =>  setAllMovies([...updatedMovies])} />
            {/* < Movie  allMovies={allMovies} setAllMovies={handleSetMovies}/> */}
        </div>
    );
}
 
export default MovieList;