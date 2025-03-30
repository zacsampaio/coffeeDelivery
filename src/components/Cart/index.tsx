import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartButtonContainer, CartContainer } from "./styles";
import { RootState } from "../../redux/root-reducer";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ProductsType } from "../../redux/cart/action-types";

export interface CartProps {
  $color: string;
  $background: string;
  showBadge?: boolean;
}

export function Cart({ $color, $background, showBadge }: CartProps) {
  const { products } = useSelector((state: RootState) => state.cartReducer);

  const productCount = useMemo(() => {
    return products.reduce(
      (acc: number, curr: ProductsType) => acc + curr.quantity,
      0
    );
  }, [products]);

  return (
    <CartContainer>
      <NavLink to="/checkout" title="Checkout">
        <CartButtonContainer $color={$color} $background={$background}>
          <ShoppingCart size={20} weight="fill" />
        </CartButtonContainer>
        {showBadge && productCount > 0 && 
          (<span>{productCount}</span>)}
      </NavLink>
    </CartContainer>
  );
}
