import { createStore } from "redux";

import { rootReducer } from "../redux";

export const configureStore = () => {
  return { ...createStore(rootReducer) };
};
