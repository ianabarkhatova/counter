import {counterReducer, CounterStateType, incrementNumberAC, resetCounterAC} from "./counter-reducer";

let startState: CounterStateType

beforeEach(()=> {
    startState =
        {counter: 0, minValue: 2, maxValue: 5}
})

// after clicking 'inc' button
test('counter should be incremented', () => {

    const action = incrementNumberAC()
    const endState: CounterStateType = counterReducer(startState, action)

    expect(endState.counter).toBe(1)
    expect(endState.minValue).toBe(2)
    expect(endState.maxValue).toBe(5)
})

// after clicking 'reset' button
test('counter should be reset to min value', () => {

    const action = resetCounterAC(startState.minValue)
    const endState: CounterStateType = counterReducer(startState, action)

    expect(endState.counter).toBe(2)
    expect(endState.minValue).toBe(2)
    expect(endState.maxValue).toBe(5)
})



