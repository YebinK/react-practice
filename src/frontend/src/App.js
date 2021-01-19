import React, {useState, useEffect} from 'react';

function App() {

    const [condition, setCondition] = useState(false);

    const toggle = () => {
        setCondition(!condition);
    }

    useEffect(() => {
        console.log(condition)
    }, [condition])

    const renderCondition = condition
        ? <div>True</div>
        : <div>False</div>

    const renderCondition2 = condition
        ? 'True'
        : 'False'

    return (
        <div className="App">
            <h1>Elly Nelly</h1>
            {renderCondition}

            <div> {renderCondition2} </div>

            <button onClick={toggle}>Toggle</button>
        </div>
    );
}

export default App;
