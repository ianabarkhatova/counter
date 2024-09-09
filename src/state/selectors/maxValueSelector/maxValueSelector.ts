import {AppRootStateType} from "../../../app/store";

export const maxValueSelector = (state: AppRootStateType): number => state.settings.maxValue


