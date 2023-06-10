import { useState } from "react";
import Movie from "./Movie";
import Stars from './Stars';

const MovieList = (props) => {

    const sectionMain = props.sectionMain;
   
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


    return (

        <>
            <Movie displayCurrentMovie={updatedMovie => setAllMovies(updatedMovie)} dashboard={!sectionMain}    allMovies={allMovies.filter((movie) => movie.status === 'active' )}  />

            <Movie displayCurrentMovie={updatedMovie => setAllMovies(updatedMovie)} dashboard={sectionMain}    allMovies={allMovies}  />
        </>
    );
}
 
export default MovieList;