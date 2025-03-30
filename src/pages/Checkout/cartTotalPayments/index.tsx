import { useSelector } from "react-redux";
import { CheckoutDelivery, CheckoutPayments, CheckoutTotal, CheckoutTotalItems, ConfirmedButton } from "./styled";
import { ProductsType } from "../../../redux/cart/types";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../redux/rootReducer";
import { CardCart } from "../../../components/cardCart";


export function CartTotalPayments(){
    const { products } = useSelector((state: RootState) => state.cart)
  
    const valueProducts = useMemo(() => {
      return products.reduce((acc: number, curr: ProductsType) => acc + (curr.price * curr.quantity), 0)
    }, [products])
  
    const valueDelivery = 5
  
    const totalValue = valueProducts + valueDelivery

  return (
    <CheckoutPayments>
          {products
            .filter(product => product.quantity > 0)
            .map((product) => (
              <CardCart
                key={product.id}
                product={product}
              />
            )
          )}
          <CheckoutTotalItems>
            <p>Total de Itens</p>
            <p>R$ {valueProducts.toFixed(2)}</p>
          </CheckoutTotalItems>
          {valueProducts > 0 &&
            <CheckoutDelivery>
            <p>Entrega</p>
            <p>R$ {valueDelivery.toFixed(2)}</p>
            </CheckoutDelivery>
           }
          <CheckoutTotal>
            <p>Total</p>
            <p>R$ { valueProducts > 0 ? totalValue.toFixed(2) : valueProducts.toFixed(2)}</p>
          </CheckoutTotal>
          <NavLink to="/confirmed" title="Confirmed">
            <ConfirmedButton >CONFIRMAR PEDIDO</ConfirmedButton>
          </NavLink>
        </CheckoutPayments>
  )
}