import React from 'react';

function App() {

    const onKeyUp = (event) => {
        if (event.keyCode === 13) { //엔터이면
            onSubmit();
        }
        console.log('key up');
    }

    const onSubmit = () => {
        alert('submitted');
    }

    return (
        <div className="App">
            <input onKeyUp={onKeyUp}/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default App;
