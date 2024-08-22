import {ChangeEvent, useState} from "react";


type ValuePropsType = {
    valueText: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
};


export const Value = ({valueText, onChange, value}: ValuePropsType) => {

    return (
        <div className={"span-value-div"}>
            <span className={'span-value'}>{valueText}:</span>
            <input className={'input'} type={'number'} onChange={onChange} value={value} min={0}/>
        </div>
    );
};