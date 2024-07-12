import React, {useState} from 'react';
import './App.css';
import {Counter} from "./counter/Counter";

function App() {
    const min = 0;
    const max = 4

    const [counter, setCounter] = useState<number>(min)

    const incHandler = ()=>
        counter <= max ? setCounter(counter + 1) : counter

    const resHandler = () => {
        setCounter(min)
    }


    return (
        <div className="App">
            <Counter
                counter={counter}
                incNumber={incHandler}
                resNumber={resHandler}
                min={min}
                max={max}
            />
        </div>
    );
}

export default App;
