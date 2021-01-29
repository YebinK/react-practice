import React, { useState, useEffect } from 'react';
import Movie from "./components/Movie";

function App() {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [movies, setMovies] = useState([
        { id: 1, title: 'Harry Potter 1', year: 2001 },
        { id: 2, title: 'Harry Potter 2', year: 2002 },
        { id: 3, title: 'Harry Potter 3', year: 2003 },
        { id: 4, title: 'Harry Potter 4', year: 2004 },
        { id: 5, title: 'Harry Potter 5', year: 2005 },
    ]);

    useEffect(() => {
        console.log('render');
    }, [movies])

    const renderMovies = movies.map(movie => {
        return (
            <Movie movie={movie} key={movie.id} />
        )
    })
    const addMovie = (event) => {
        event.preventDefault();

        console.log(movieTitle, movieYear);

        setMovies([...movies, {
            id: 0,
            title: movieTitle,
            year: movieYear,
        }])
    }

    return (
        <div className="App">
            <h1>Movie List</h1>
            {renderMovies}

            <form onSubmit={addMovie}>
                <input
                    type="text"
                    value={movieTitle}
                    placeholder="영화제목"
                    onChange={e => setMovieTitle(e.target.value)}/>
                <br/>

                <input type="text"
                       value={movieYear}
                       placeholder="개봉년도"
                       onChange={e => setMovieYear(e.target.value)}/>
                <br/>

                <button type="submit">영화 추가</button>
            </form>
        </div>
    );
}

export default App;
