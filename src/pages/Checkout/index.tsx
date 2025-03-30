import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  CheckoutAreaForm,
  CheckoutPayments,
  CheckoutComponents,
  CheckoutForm,
  CheckoutPaymentMethods,
  CheckoutAreaPayments,
  ConfirmedButton,
  CheckoutPaymentMethodsTitle,
  CheckoutPaymentMethodsButtons,
  CheckoutFormTitles,
  CheckoutFormInputs,
  CheckoutTotalItems,
  CheckoutDelivery,
  CheckoutTotal,
} from "./styled";
import { CardCart } from "./components/cardCart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { useMemo } from "react";
import { ProductsType } from "../../redux/cart/action-types";

export function Checkout() {
  const { products } = useSelector((state: RootState) => state.cartReducer)

  const valueProducts = useMemo(() => {
    return products.reduce((acc: number, curr: ProductsType) => acc + (curr.price * curr.quantity), 0)
  }, [products])

  const valueDelivery = 5

  const totalValue = valueProducts + valueDelivery


  return (
    <CheckoutComponents>
      <CheckoutAreaForm>
        <h3>Complete seu pedido</h3>
        <CheckoutForm>
          <CheckoutFormTitles>
            <MapPinLine size={22} />
            <h4>Endereço de Entrega</h4>
          </CheckoutFormTitles>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <CheckoutFormInputs>
            <input placeholder="CEP" required/>
          </CheckoutFormInputs>
          <input placeholder="Rua"  required/>
          <CheckoutFormInputs>
            <input placeholder="Número" required/>
            <input placeholder="Complemento" required={false}/>
          </CheckoutFormInputs>
          <CheckoutFormInputs>
            <input placeholder="Bairro" required/>
            <input placeholder="Cidade" required/>
            <input placeholder="UF"required />
          </CheckoutFormInputs>
        </CheckoutForm>
        <CheckoutPaymentMethods>
          <CheckoutPaymentMethodsTitle>
            <CurrencyDollar size={22} />
            <h4>Pagamento</h4>
          </CheckoutPaymentMethodsTitle>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <CheckoutPaymentMethodsButtons>
            <button>
              <CreditCard size={16} />
              <h5>CARTÃO DE CRÉDITO</h5>
            </button>
            <button>
              <Bank size={16} />
              <h5>CARTÃO DE DÉBITO</h5>
            </button>
            <button>
              <Money size={16} />
              <h5>DINHEIRO</h5>
            </button>
          </CheckoutPaymentMethodsButtons>
        </CheckoutPaymentMethods>
      </CheckoutAreaForm>

      <CheckoutAreaPayments>
        <h3>Cafés selecionados</h3>
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
      </CheckoutAreaPayments>
    </CheckoutComponents>
  );
}
