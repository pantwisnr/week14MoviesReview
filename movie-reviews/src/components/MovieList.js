import { useState } from "react";
import Movie from "./Movie";
import MovieHouse from "./MovieHouse";

const MovieList = () => {
    
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
                reviews: []
            },
            {
                title: 'Hangover',
                description: '',
                ratings: '3.5',
                tags: 'Adventure, Action',
                img: '',
                duration: `00hr :00mins`,
                id: 5,
                reviews: []
            },
            {
                title: 'London has Fallen',
                description: '',
                ratings: '3.5',
                tags: 'Adventure, Action',
                img: 'new',      // the "new is for testing purposes."
                duration: `00hr :00mins`,
                id: 6,
                reviews: []
            },
        ]
    ); 

    

    return (
        <div className="allMovies">
            < Movie  allMovies={allMovies} />
            {/* < Movie allMovies={allMovies.filter((movie) => movie.img === 'new' )}/> */}
        </div>
      );
}
 
export default MovieList;