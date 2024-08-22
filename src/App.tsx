import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";

function App() {

    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    const [counter, setCounter] = useState<number>(minValue)
    const [settingsApplied, setSettingsApplied] = useState<boolean>(false)

// todo: fix bug when start and max values are the same - inc button is not deactivated
// todo: fix bug when start value is greater than max values - inc button is not deactivated
// todo: fix bug when reset button is active when start value is greater than max value
// todo: fix bug when inc button is active when start value is greater than max value


    //deactivated local storage until 14th lesson
//local storage - counter
//     useEffect(() => {
//         const counterAsString = localStorage.getItem('counterValue')
//         if (counterAsString) {
//             const newCounter = JSON.parse(counterAsString)
//             setCounter(newCounter)
//         }
//     }, [])
//
//     //каждый раз, когда counter будет изменяться, я буду попадать в counter, и будет устанавливаться значение в local storage
//     useEffect(() => {
//         localStorage.setItem('counterValue', JSON.stringify(counter))
//     }, [counter])
//
// //local storage - minValue
//     useEffect(() => {
//         const minValueAsString = localStorage.getItem('newMinValue')
//         if (minValueAsString) {
//             const newMinValue = JSON.parse(minValueAsString)
//             setMinValue(newMinValue)
//
//             if (newMinValue !== 0) {
//                 setSettingsApplied(true);
//             }
//         }
//     }, [])
//
//     useEffect(() => {
//         localStorage.setItem('newMinValue', JSON.stringify(minValue))
//     }, [minValue])
//
//     //local storage - maxValue
//     useEffect(() => {
//         const maxValueAsString = localStorage.getItem('newMaxValue')
//         if (maxValueAsString) {
//             const newMaxValue = JSON.parse(maxValueAsString)
//             setMaxValue(newMaxValue)
//
//             if (newMaxValue !== 0) {
//                 setSettingsApplied(true);
//             }
//         }
//     }, [])
//
//
//     useEffect(() => {
//         localStorage.setItem('newMaxValue', JSON.stringify(maxValue))
//     }, [maxValue])


    const incHandler = () =>
        counter < maxValue ? setCounter(counter + 1) : counter

    const resHandler = () => {
        setCounter(minValue)
    }

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinValue = Number(e.currentTarget.value)
        setMinValue(newMinValue)
    };

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = Number(e.currentTarget.value)
        setMaxValue(newMaxValue)
    }

    const applySettings = () => {
        if (minValue !== maxValue && maxValue > minValue) {
            setCounter(minValue)
            setSettingsApplied(true)
        }
    }


    return (
        <div className="App">
            <Settings
                handleMinChange={handleMinChange}
                handleMaxChange={handleMaxChange}
                setCounter={setCounter}
                minValue={minValue}
                maxValue={maxValue}
                applySettings={applySettings}
            />
            <Counter
                counter={counter}
                incNumber={incHandler}
                resNumber={resHandler}
                handleMinChange={handleMinChange}
                handleMaxChange={handleMaxChange}
                minValue={minValue}
                maxValue={maxValue}
                settingsApplied={settingsApplied}
            />
        </div>
    );
}

export default App;
