export interface ProductsType {
  id: number;
  tags?: string[];
  name: string;
  description?: string;
  price: number;
  quantity: number
}

export const CartActionTypes = {
  INCREASE_PRODUCT: "cart/increaseProduct",
  DECREASE_PRODUCT: "cart/decreaseProduct",
  REMOVE_PRODUCT: "cart/removeProduct"
} 