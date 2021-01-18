import React, { useState } from 'react';

function App() {

    const [text, setText] = useState('elly1');

    const onKeyUp = (event) => {
        if (event.keyCode === 13) { //엔터이면
            onSubmit();
        }
        console.log('key up');
    }

    const onSubmit = () => {
        alert('submitted');
    }

    // let ellyText = 'elly1';

    const updateText = () => {
        // ellyText = 'nelly1';
        setText('nelly1');
        console.log(text);
    }

    return (
        <div className="App">
            <input onKeyUp={onKeyUp}/>
            <button onClick={onSubmit}>Submit</button>

            <br/> <br/>

            <span>{text}</span>
            <button onClick={updateText}>Update</button>
        </div>
    );
}

export default App;
