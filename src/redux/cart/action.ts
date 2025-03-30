import { CartActionTypes, ProductsType } from "./action-types";

export const increaseProduct = (payload: ProductsType) => ({
  type: CartActionTypes.INCREASE_PRODUCT,
  payload,
})

export const decreaseProduct = (payload: ProductsType) => ({
  type: CartActionTypes.DECREASE_PRODUCT,
  payload,
})

export const removeProduct = (payload: ProductsType) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
})