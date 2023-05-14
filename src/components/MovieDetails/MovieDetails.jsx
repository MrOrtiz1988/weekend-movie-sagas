import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function MovieDetails () {
    //theMovie has the data of the movie that was stored after image was clicked
    const theMovie = useSelector(store => store.movieDetails);
    //movieGenres contains the genres we get from the database for that exact movie id
    const movieGenres = useSelector(store => store.genres);
    const history = useHistory();

    const backtButton = () => {
        history.push('/');
    }

    return (
        <div>
            <img src={theMovie.poster} alt={theMovie.title} />
            <h2>{theMovie.title}</h2>
            <ul>
            {
                movieGenres.map(genre => {
                    return (
                        <li key={genre.id}>{genre.genre_name}</li>
                    )
                })
            }
            </ul>
            <p>{theMovie.description}</p>
            <button onClick={backtButton}>Back To List</button>
        </div>
    )
}

export default MovieDetails;