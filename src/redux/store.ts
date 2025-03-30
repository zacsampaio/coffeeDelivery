import { Store } from "redux";
import { rootReducer } from "./rootReducer";
import { CartState } from "./cart/types";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { loadState, saveState } from "./localStorage";

type ApplicationState = {
  cart: CartState;
};

const persistedState = loadState();

export const store: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => {
  const state = store.getState();
  saveState(state.cart)
})

