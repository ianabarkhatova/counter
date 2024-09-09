import {AppRootStateType} from "../../../app/store";

export const counterSelector = (state: AppRootStateType): number => state.counter.counter

