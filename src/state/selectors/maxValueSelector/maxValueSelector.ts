import {RootState} from "../../../app/store";

export const maxValueSelector = (state: RootState): number => state.counter?.maxValue


