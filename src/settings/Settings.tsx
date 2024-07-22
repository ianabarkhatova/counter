import {Button} from "../button/Button";


type SettingsProps = {
    counter: number
};


export const Settings = ({counter}: SettingsProps) => {
    return (
        <div className={"counter-div"}>
            <div className={"value-div"}>
                <div className={"span-value-div"}>
                    <span className={'span-value'}>max value:</span>
                    <input className={'input'} type={'number'}/>
                </div>

                <div className={"span-value-div"}>
                    <span className={'span-value'}>start value:</span>
                    <input className={'input'} type={'number'}/>
                </div>

            </div>


            <div className={"buttons-div"}>
                <Button
                    title={"set"}
                    className={"button-main"}
                    // onClick={incNumber}
                    // disabled={counter > max}
                />
            </div>
        </div>
    );
};