import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from '../state/counter-reducer'
import {settingsReducer} from "../state/settings-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe((() => {
    saveState({
        counter: store.getState().counter,
        settings: store.getState().settings
    })
}))

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store