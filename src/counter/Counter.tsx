import {Button} from "../button/Button";
import {Number} from "../number/Number";


type CounterProps = {
    incNumber: () => void
    resNumber: () => void
    counter: number
    min: number
    max: number
};


export const Counter = ({incNumber, resNumber, counter, min, max}: CounterProps) => {
    return (
        <div className={"counter-div"}>
            <div className={"number-div"}>
                <Number
                    className={counter > max ? "span-counter-max" : "span-counter"}
                    counter={counter}/>
            </div>

            <div className={"buttons-div"}>
                <Button
                    title={"inc"}
                    className={counter > max ? "disabled" : "button-main"}
                    onClick={incNumber}
                    disabled={counter > max}
                />
                <Button
                    title={"reset"}
                    className={counter === min ? "disabled" : "button-main"}
                    onClick={resNumber}
                    disabled={counter === min}
                />
            </div>
        </div>
    );
};