import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const sendToDetails = (movie, id) => {
        //this dispatch sends the movies details that got clicked on to redux movieDetails
        dispatch({ type: 'SET_DETAILS', payload: movie });
        //this dispatch sends the id of the movie that was clicked on to sagas fetchAllGenres
        dispatch({ type: 'FETCH_GENRES', payload: id });
        //this history.push takes us to the details page after the click
        history.push('/details');

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className='movie-div' key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img
                                onClick={() => sendToDetails(movie, movie.id)}
                                src={movie.poster}
                                alt={movie.title}
                            />


                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;