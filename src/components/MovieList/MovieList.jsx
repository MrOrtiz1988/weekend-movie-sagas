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

        dispatch({ type: 'SET_DETAILS', payload: movie })

        dispatch({ type: 'FETCH_GENRES', payload: id });

        history.push('/details')

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h2>{movie.title}</h2>
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