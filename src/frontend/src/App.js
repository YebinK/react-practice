import React from 'react';
import Counter from './components/Counter';

function App() {

    return (
        <div className="App">
            <h1>Elly Nelly</h1>
            {/*여러 개의 Counter를 중복 없이 구현할 수 있다.*/}
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
    );
}

export default App;
