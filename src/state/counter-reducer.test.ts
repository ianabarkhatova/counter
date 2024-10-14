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
})

// after clicking 'reset' button
test('counter should be reset to min value', () => {
    const action = resetCounterAC(2)
    const endState: CounterStateType = counterReducer(startState, action)

    expect(endState.counter).toBe(2)
})

// after clicking 'inc' button
// test('counter should not be incremented to greater than max value', () => {
//     startState =
//         {counter: 5, minValue: 2, maxValue: 5}
//
//     const action = incrementNumberAC()
//     const endState: CounterStateType = counterReducer(startState, action)
//
//     expect(endState.counter).toBe(5)
//     expect(endState.maxValue).toBe(5)
// })



