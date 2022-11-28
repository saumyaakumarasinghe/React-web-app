import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=7db2bc9c';

//Movie onject
const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}

//Main functional component
const App = () => {

    //Create a new function to fetch movies
    const searchMovies = async(title) => {
        //Call API
        const response = await fetch(`${API_URL}&s=${title}`);
        //Get data from the API
        const data = await response.json();

        console.log(data.Search);
    
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
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;