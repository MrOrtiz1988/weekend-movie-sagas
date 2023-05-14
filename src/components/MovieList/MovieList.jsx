import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const sendToDetails = (movie) => {
        dispatch({
            type: 'SET_DETAILS',
            payload: movie
        })

        dispatch({ type: 'FETCH_GENRES', payload: 1 });

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className='movieList-div' key={movie.id} >
                            <img onClick={() => sendToDetails(movie)} className='movieList-images' src={movie.poster} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <p>{movie.description}</p>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;