import {useEffect, useState} from "react";
import "./App.css"
import search from "./search.svg"
import MovieCard from "./moviecard";
import Navbar from "./navbar.jsx"
import Logo from "./logo.jsx";

//2aa7dde4

const API_URL = 'http://www.omdbapi.com?apikey=2aa7dde4';


const App = () => {

    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
}

useEffect(() => {
searchMovies('Spiderman')
},[]);

    return(
        <div className="app">
            <div className="navbar-container">
                <Logo />
                <Navbar className="navbar"/>
            </div>
            
            <h1>Movie Finder</h1>
            

            <div className="search">
                <input placeholder="Search for movies..." value= {searchTerm } onChange={(e) => setSearchTerm(e.target.value) }>
                </input>
                <img src={search} alt="search" onClick={() => searchMovies(searchTerm)}/>
            </div>

            {movies?.length > 0 
                ? (
                 <div className="container">
                 {movies.map((movie) => 
                 <MovieCard movie={movie} />
                 )}

                 </div> 
                ) :(
                 <div className="empty">
                 <h2>No movies found</h2>

                 </div>
                )}

             


        </div>
    );
}

export default App;