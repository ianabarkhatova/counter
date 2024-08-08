import {Button} from "../button/Button";
import {Number} from "../number/Number";
import {ChangeEvent} from "react";


type CounterProps = {
    incNumber: () => void
    resNumber: () => void
    counter: number
    handleMinChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleMaxChange: (e: ChangeEvent<HTMLInputElement>) => void
    minValue: number
    maxValue: number
    settingsApplied: boolean
};


export const Counter = ({incNumber, resNumber, counter, minValue, maxValue, settingsApplied}: CounterProps) => {
    return (
        <div className={"counter-div"}>
            <div className={"number-div"}>
                {!settingsApplied ? (
                    <div className={'enter-values'}>Enter min and max values and press 'set'</div>
                ) : (
                <Number
                    className={counter === maxValue && counter !== 0 ? "span-counter-max" : "span-counter"}
                    counter={counter}
                />
                )}
            </div>


            <div className={"buttons-div"}>
                <Button
                    title={"inc"}
                    className={counter === maxValue || !settingsApplied ? "disabled" : "button-main"}
                    onClick={incNumber}
                    disabled={counter > maxValue}
                />
                <Button
                    title={"reset"}
                    className={counter === minValue || !settingsApplied? "disabled" : "button-main"}
                    onClick={resNumber}
                    disabled={counter === minValue}
                />
            </div>
        </div>
    );
};