import {RootState} from "../../../app/store";

export const counterSelector = (state: RootState): number => state.counter?.counter

