import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducer"; 


export const rootReducer = combineReducers({ cartReducer });

export type RootState = ReturnType<typeof rootReducer>;
