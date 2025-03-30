import { ProductsType } from "./action-types";

export interface CartState {
  products: ProductsType[]
}

export type ActionType =
  | { type: "INCREASE_PRODUCT"; payload: ProductsType }
  | { type: "DECREASE_PRODUCT"; payload: ProductsType }
  | { type: "REMOVE_PRODUCT"; payload: ProductsType };