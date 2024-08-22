export type CounterStateType = {
    counter: number
    minValue: number
    maxValue: number

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

type ActionType =
    | IncrementNumberActionType
    | ResetCounterActionType



export const counterReducer = (state: CounterStateType, action: ActionType): CounterStateType => {
    switch (action.type) {
        case 'INCREMENT-NUMBER':
            return {
                ...state,
                counter: state.counter < state.maxValue ? state.counter + 1 : state.counter
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
    return { type: 'INCREMENT-NUMBER'}
}

export const resetCounterAC = (minValue: number): ResetCounterActionType => {
    return { type: 'RESET-COUNTER', payload: { minValue }}
}






