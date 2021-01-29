import React, { useState } from 'react';
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";

function App() {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Harry Potter 1', year: 2001 },
        { id: 2, title: 'Harry Potter 2', year: 2002 },
        { id: 3, title: 'Harry Potter 3', year: 2003 },
        { id: 4, title: 'Harry Potter 4', year: 2004 },
        { id: 5, title: 'Harry Potter 5', year: 2005 },
    ]);

    const renderMovies = movies.map(movie => {
        return (
            <Movie movie={movie} key={movie.id} />
        )
    })

    //1. 얘를 자식 컴포넌트(MovieForm)의 props로 넘겨준다.
    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    }

    return (
        <div className="App">
            <h1>Movie List</h1>
            {renderMovies}

            <MovieForm addMovie={addMovie}/>
        </div>
    );
}

export default App;
