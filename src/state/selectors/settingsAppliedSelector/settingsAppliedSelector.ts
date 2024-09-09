import {AppRootStateType} from "../../../app/store";

export const settingsAppliedSelector = (state: AppRootStateType): boolean => state.settings.settingsApplied


