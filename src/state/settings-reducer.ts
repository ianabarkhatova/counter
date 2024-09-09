import {CounterStateType} from "./counter-reducer";

export type SettingsStateType = {
    minValue: number
    maxValue: number
    settingsApplied: boolean
}

const InitialSettingsState: SettingsStateType = {
    minValue: 0,
    maxValue: 0,
    settingsApplied: false
}

export type SetMinValueActionType = {
    type: 'SET-MIN-VALUE',
    payload: {
        minValue: number
    }
}

export type SetMaxValueActionType = {
    type: 'SET-MAX-VALUE',
    payload: {
        maxValue: number
    }
}

export type ApplySettingsActionType = {
    type: 'APPLY-SETTINGS',
}

type SettingsActionType =
    | SetMinValueActionType
    | SetMaxValueActionType
    | ApplySettingsActionType


export const settingsReducer = (state: SettingsStateType = InitialSettingsState, action: SettingsActionType): SettingsStateType => {
    switch (action.type) {
        case 'SET-MIN-VALUE':
            return {
                ...state,
                minValue: action.payload.minValue,
                settingsApplied: false
            }
        case 'SET-MAX-VALUE':
            return {
                ...state,
                maxValue: action.payload.maxValue,
                settingsApplied: false
            }
        case 'APPLY-SETTINGS':
            return {
                ...state,
                settingsApplied: true
            }
        default:
            return state
    }
}

export const setMinValueAC = (minValue: number): SetMinValueActionType => {
    return {type: 'SET-MIN-VALUE', payload: {minValue}}
}

export const setMaxValueAC = (maxValue: number): SetMaxValueActionType => {
    return {type: 'SET-MAX-VALUE', payload: {maxValue}}
}

export const applySettingsAC = (): ApplySettingsActionType => {
    return {type: 'APPLY-SETTINGS'}
}






