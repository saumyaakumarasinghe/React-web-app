//Import hooks
import { useState, useEffect } from "react";

//Import files
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=7db2bc9c';

const App = () => {                                             //Main functional component
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSeacrchTerm] = useState('');

    const searchMovies = async(title) => {                      //Create a new function to fetch movies
        const response = await fetch(`${API_URL}&s=${title}`);  //Call API
        const data = await response.json();                     //Get data from the API

        setMovies(data.Search);
    
    }

    //Call only at the start
    useEffect (() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSeacrchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
            movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) :
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;