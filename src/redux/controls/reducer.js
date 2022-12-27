import { Types } from "./types";

const initialState = {
  theme: "light",

};

const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_THEME:
      return { ...state, theme: payload };
    default:
      return state;
  }
};

export default controlsReducer;
