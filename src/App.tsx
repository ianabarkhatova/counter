import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter/Counter";

function App() {
    const min = 0;
    const max = 4

    const [counter, setCounter] = useState<number>(min)

    useEffect(() => {
        let counterAsString= localStorage.getItem('counterValue')
        if(counterAsString) {
            let newCounter = JSON.parse(counterAsString)
            setCounter(newCounter)
        }
    }, [] )

    //каждый раз, когда counter будет изменяться, я буду попадать в counter, и будет устанавливаться значение в local storage
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter] )

    const incHandler = () =>
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
