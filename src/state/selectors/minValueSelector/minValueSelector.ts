import {RootState} from "../../../app/store";

export const minValueSelector = (state: RootState): number => state.counter?.minValue


