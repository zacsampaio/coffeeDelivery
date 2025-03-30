import { CartActionTypes, ProductsType } from "./"

type ActionType = | { type: "ADD_PRODUCT", payload: ProductsType }

const initialState = {
  products: []
}

export function cartReducer(state = initialState, action: ActionType){
  switch (action.type){
    case CartActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...initialState.products, action.payload]
      }

    default:
      return state
  }
}