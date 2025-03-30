import { useDispatch, useSelector } from "react-redux";
import { ProductsType } from "../../redux/cart/action-types";
import {
  CountButtonComponents,
  CountButtonQuantity,
  CountQuantity,
} from "./styled";
import { decreaseProduct, increaseProduct } from "../../redux/cart/action";
import { RootState } from "../../redux/root-reducer";

interface CountButtonProps {
  product: ProductsType;
}

export function CountButton({ product }: CountButtonProps) {
  const dispatch = useDispatch()
  const productInCart = useSelector((state: RootState) => 
    state.cartReducer.products.find((p) => p.id === product.id))


  function handleAddProductToCart(){
    dispatch(increaseProduct(product))
  }

  function handleDecreaseProduct(){
    dispatch(decreaseProduct(product))
  }


  return (
    <CountButtonComponents>
      <CountButtonQuantity onClick={handleDecreaseProduct}>-</CountButtonQuantity>
      <CountQuantity>{productInCart?.quantity ?? 0}</CountQuantity>
      <CountButtonQuantity onClick={handleAddProductToCart}>+</CountButtonQuantity>
    </CountButtonComponents>
  );
}
