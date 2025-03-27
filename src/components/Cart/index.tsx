import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartContainer } from "./styles";

export interface CartProps {
  $color: string,
  $background: string,
}


export function Cart({ $color, $background }: CartProps){

  return(
    <NavLink to="/checkout" title="Checkout">
    <CartContainer $color={$color} $background={$background}>
      <ShoppingCart size={20} weight="fill"/>
    </CartContainer>          
  </NavLink>
  )
}