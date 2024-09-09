import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {incrementNumberAC, resetCounterAC} from "./state/counter-reducer";
import {applySettingsAC, setMaxValueAC, setMinValueAC} from "./state/settings-reducer";
import {counterSelector} from "./state/selectors/counterSelector/counterSelector";
import {minValueSelector} from "./state/selectors/minValueSelector/minValueSelector";
import {settingsAppliedSelector} from "./state/selectors/settingsAppliedSelector/settingsAppliedSelector";
import {maxValueSelector} from "./state/selectors/maxValueSelector/maxValueSelector";

function App() {
    const dispatch = useDispatch();

    let counter = useSelector(counterSelector)
    let minValue = useSelector(minValueSelector)
    let maxValue = useSelector(maxValueSelector)
    let settingsApplied = useSelector(settingsAppliedSelector)

    //deactivated local storage until 14th lesson
//local storage - counter
//     useEffect(() => {
//         const counterAsString = localStorage.getItem('counterValue')
//         if (counterAsString) {
//             const newCounter = JSON.parse(counterAsString)
//             setCounter(newCounter)
//         }
//     }, [])

//каждый раз, когда counter будет изменяться, я буду попадать в counter, и будет устанавливаться значение в local storage
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])

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

    useEffect(() => {
        localStorage.setItem('newMinValue', JSON.stringify(minValue))
    }, [minValue])

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

    useEffect(() => {
        localStorage.setItem('newMaxValue', JSON.stringify(maxValue))
    }, [maxValue])


    const incHandler = () =>
        counter < maxValue ? dispatch(incrementNumberAC()) : counter

    const resHandler = () => {
        dispatch(resetCounterAC(minValue))
    }

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        // debugger
        dispatch(setMinValueAC(Number(e.currentTarget.value)))
    };

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        // debugger
        dispatch(setMaxValueAC(Number(e.currentTarget.value)))
    }

    const applySettings = () => {
        if (minValue !== maxValue && maxValue > minValue) {
            dispatch(applySettingsAC());
            dispatch(resetCounterAC(minValue));        }
    }


    return (
        <div className="App">
            <Settings
                handleMinChange={handleMinChange}
                handleMaxChange={handleMaxChange}
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
