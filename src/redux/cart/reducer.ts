import { CartActionTypes } from "./action-types";
import { ActionType, CartState } from "./types";


const initialState: CartState = {
  products: [],
};

export function cartReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case CartActionTypes.INCREASE_PRODUCT: {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: (product.quantity ?? 0) + 1 }
              : product
          ),
        };
      }

      return {
        ...state,
        products: [
          ...state.products,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ],
      }
    };

    case CartActionTypes.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload.id && product.quantity > 1
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.id)
      }

    default:
      return state;
  }
}
