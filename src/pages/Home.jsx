import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
      { id: '1', title: 'Harry Potter I', release_date: '2024' },
      { id: '2', title: 'Harry Potter II', release_date: '2023' },
      { id: '3', title: 'Harry Potter III', release_date: '2022' },
      { id: '4', title: 'Harry Potter IV', release_date: '2020' },
      { id: '5', title: 'Harry Potter V', release_date: '2021' },
      { id: '6', title: 'Harry Potter VI', release_date: '2025' },
      { id: '7', title: 'Harry Potter VII', release_date: '2022' },
      { id: '8', title: 'Harry Potter VIII', release_date: '2023' },
      { id: '9', title: 'Harry Potter IX', release_date: '2020' },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch= async(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (<>
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
            Search
            </button>
        </form>
        <div className="movies-grid">
            {movies.map((movie)=> <MovieCard movie={movie} key={movie.id}></MovieCard> )}
        </div>
        </div>
        </>);
  }
  
  export default Home;
  