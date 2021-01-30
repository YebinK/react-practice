import React, { useState } from 'react';
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
    const [movies, setMovies] = useState([]);

    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    }

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    }

    const renderMovies = movies.length ? movies.map(movie => {
        return (
            <Movie
                movie={movie}
                key={movie.id}
                removeMovie={removeMovie}/>
        )
    }) : '추가된 영화가 없습니다';

    return (
        <Router>
            <div className="App">
                <Navbar />
                {/* Switch는 여러 Route 중 하나만 match되게 한다. 위에서부터 찾아가므로 Route 간의 순서 중요!!! */}
                <Switch>
                    {/* Route 1개 당 1개의 페이지 */}
                    {/* exact : path가 정확히 일치할 때만 보여줌 */}
                    <Route path="/" exact>
                        <h1>Home</h1>
                    </Route>
                    <Route path="/movies">
                        <h1>Movie List</h1>
                        {renderMovies}
                        <MovieForm addMovie={addMovie}/>
                    </Route>
                    <Route path="/users">
                        <h1>Users</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
