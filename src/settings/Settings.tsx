import {Button} from "../button/Button";
import {Value} from "./Value";
import {ChangeEvent, useEffect, useState} from "react";


type SettingsProps = {
    handleMinChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleMaxChange: (e: ChangeEvent<HTMLInputElement>) => void
    setCounter: (value: number) => void
    minValue: number
    maxValue: number
    applySettings: () => void
};



export const Settings = ({handleMinChange, handleMaxChange, setCounter, minValue, maxValue, applySettings}: SettingsProps) => {

    const [settingsError, setSettingsError] = useState<string | null>(null)


    useEffect(() => {
        if (minValue === maxValue && minValue !== 0) {
            setSettingsError('Start and max values cannot be equal');
        }
        else if (maxValue < minValue) {
            setSettingsError('Start value cannot be greater than max value');
        }
        else {
            setSettingsError(null);
        }
    }, [minValue, maxValue]);


    return (
        <div className={"counter-div"}>
            <div className={"value-div"}>
                <Value valueText={'max value'} onChange={handleMaxChange} value={maxValue}/>
                <Value valueText={'start value'} onChange={handleMinChange} value={minValue}/>
                {settingsError && <div className={"error-message"}>{settingsError}</div>}
            </div>


            <div className={"buttons-div"}>
                <Button
                    title={"set"}
                    className={minValue <= 0 || settingsError? "disabled" : "button-main"}
                    onClick={applySettings}
                    disabled={!!settingsError}
                />
            </div>
        </div>
    );
};