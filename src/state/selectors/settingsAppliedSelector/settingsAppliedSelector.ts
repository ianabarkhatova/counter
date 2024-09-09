import {RootState} from "../../../app/store";

export const settingsAppliedSelector = (state: RootState): boolean => state.settings?.settingsApplied


