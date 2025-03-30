export enum CartActionTypes {
  INCREASE_PRODUCT = "@cart/increaseProduct",
  DECREASE_PRODUCT = "@cart/decreaseProduct",
  REMOVE_PRODUCT = "@cart/removeProduct",
}

export type ActionType =
  | { type: CartActionTypes.INCREASE_PRODUCT; payload: ProductsType }
  | { type: CartActionTypes.DECREASE_PRODUCT; payload: ProductsType }
  | { type: CartActionTypes.REMOVE_PRODUCT; payload: ProductsType };

export interface ProductsType {
  id: number;
  tags?: string[];
  name: string;
  description?: string;
  price: number;
  quantity: number;
}

export interface CartState {
  readonly products: ProductsType[];
}
