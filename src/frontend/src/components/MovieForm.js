import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');

    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    }

    const onSubmit = (event) => {
        event.preventDefault();

        //2. 부모에게 받은 메소드를 자식에서 실행한다.
        addMovie({
            id: 0,
            title: movieTitle,
            year: movieYear,
        });
        resetForm();
    }

    return (
        <form onSubmit={onSubmit}>
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
    );
}

export default MovieForm;
