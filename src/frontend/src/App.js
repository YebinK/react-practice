import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

    const [buttonName, setButtonName] = useState('클릭');

    return (
        <div className="App">
            <h1>Elly Nelly</h1>
            {/*여러 개의 Counter를 중복 없이 구현할 수 있다.*/}
            <Counter click="click1"/>
            <Counter click={buttonName}/>
            <Counter />

            <button onClick={() => setButtonName('click clicked')}>Click</button>
        </div>
    );
}

export default App;
