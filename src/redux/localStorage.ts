import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import { CartState } from "./cart/types";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState) {
      return { cart: JSON.parse(serializedState)};
    }
  } catch (err) {
    console.error("Erro ao carregar o estado do localStorage", err);
  }
  return undefined;
};

export const saveState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error("Erro ao carregar o estado do localStorage", err);
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => {
  const state = store.getState();
  saveState(state.cart)
})


