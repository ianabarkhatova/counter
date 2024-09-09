import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from '../state/counter-reducer'
import {settingsReducer} from "../state/settings-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})


export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>

//@ts-ignore
window.store = store