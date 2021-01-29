import React from 'react';
import Movie from "./components/Movie";

function App() {

    const movies = [
        { id: 1, title: 'Harry Potter 1', year: 2001 },
        { id: 2, title: 'Harry Potter 2', year: 2002 },
        { id: 3, title: 'Harry Potter 3', year: 2003 },
        { id: 4, title: 'Harry Potter 4', year: 2004 },
        { id: 5, title: 'Harry Potter 5', year: 2005 },
    ]

    const renderMovies = movies.map(movie => {
        return (
            <Movie movie={movie} key={movie.id} />
        )
    })

    return (
        <div className="App">
            <h1>Movie List</h1>
            {renderMovies}
        </div>
    );
}

export default App;
