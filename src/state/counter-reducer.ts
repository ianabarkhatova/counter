export type CounterStateType = {
    counter: number
    minValue: number
    maxValue: number
}

const InitialCounterState: CounterStateType = {
    counter: 0,
    minValue: 0,
    maxValue: 0
}

export type IncrementNumberActionType = {
    type: 'INCREMENT-NUMBER',
}

export type ResetCounterActionType = {
    type: 'RESET-COUNTER',
    payload: {
        minValue: number
    }
}

type CounterActionType =
    | IncrementNumberActionType
    | ResetCounterActionType


export const counterReducer = (state: CounterStateType = InitialCounterState, action: CounterActionType): CounterStateType => {
    switch (action.type) {
        case 'INCREMENT-NUMBER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'RESET-COUNTER':
            return {
                ...state,
                counter: action.payload.minValue
            }

        default:
            return state
    }
}

export const incrementNumberAC = (): IncrementNumberActionType => {
    return { type: 'INCREMENT-NUMBER' }
}

export const resetCounterAC = (minValue: number): ResetCounterActionType => {
    return { type: 'RESET-COUNTER', payload: { minValue }}
}






