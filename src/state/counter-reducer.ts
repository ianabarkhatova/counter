type CounterStateType = {
    minValue: number
    maxValue: number
    counter: number
}

type ActionsType =
    | 'INCREMENT-NUMBER'
    | 'RESET-COUNTER'
    | 'HANDLE-MIN-VALUE-CHANGE'
    | 'HANDLE-MAX-VALUE-CHANGE'
    | 'APPLY-SETTINGS'


type ActionType = {
    type: ActionsType
    // [key: string]: any
}

export const counterReducer = (state: CounterStateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-NUMBER':
            return {
                // number
            }
        case 'RESET-COUNTER':
            return {
                // number
            }
        case 'HANDLE-MIN-VALUE-CHANGE':
            return {
                // number
            }
        case 'HANDLE-MAX-VALUE-CHANGE':
            return {
                // number
            }
        case 'APPLY-SETTINGS':
            return {
                // number
            }

        default:
            return state
    }
}




