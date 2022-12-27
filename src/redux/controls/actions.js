import { Types } from "./types";
export const setTheme = (mode) => {
  return {
    type: Types.SET_THEME,
    payload: mode,
  };
};


