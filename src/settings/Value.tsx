import {ChangeEvent, useState} from "react";


type ValuePropsType = {
    valueText: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    minValue: number
    maxValue: number
};


export const Value = ({valueText, onChange, value, minValue, maxValue}: ValuePropsType) => {

    return (
        <div className={"span-value-div"}>
            <span className={'span-value'}>{valueText}:</span>
            <input className={'input'} type={'number'} onChange={onChange} min={0}/>
        </div>
    );
};