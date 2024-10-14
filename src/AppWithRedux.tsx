import React, {ChangeEvent} from 'react';
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
import {AppRootStateType} from "./app/store";

function App() {
    const dispatch = useDispatch();

    let counter = useSelector<AppRootStateType, number>(counterSelector)
    let minValue = useSelector<AppRootStateType, number>(minValueSelector)
    let maxValue = useSelector<AppRootStateType, number>(maxValueSelector)
    let settingsApplied = useSelector<AppRootStateType, boolean>(settingsAppliedSelector)


    const incHandler = () =>
        counter < maxValue ? dispatch(incrementNumberAC()) : counter

    const resHandler = () => {
        dispatch(resetCounterAC(minValue))
    }

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(Number(e.currentTarget.value)))
    };

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
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
