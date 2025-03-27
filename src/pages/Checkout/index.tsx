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

export function Checkout() {
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
            <input placeholder="CEP" />
          </CheckoutFormInputs>
          <input placeholder="Rua" />
          <CheckoutFormInputs>
            <input placeholder="Número" />
            <input placeholder="Complemento"/>
          </CheckoutFormInputs>
          <CheckoutFormInputs>
            <input placeholder="Bairro" />
            <input placeholder="Cidade" />
            <input placeholder="UF" />
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
          <CardCart />
          <CardCart />
          <CheckoutTotalItems>
            <p>Total de Itens</p>
            <p>R$ 29,70</p>
          </CheckoutTotalItems>
          <CheckoutDelivery>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </CheckoutDelivery>
          <CheckoutTotal>
            <p>Total</p>
            <p>R$ 33,20</p>
          </CheckoutTotal>
          <NavLink to="/confirmed" title="Confirmed">
            <ConfirmedButton>CONFIRMAR PEDIDO</ConfirmedButton>
          </NavLink>
        </CheckoutPayments>
      </CheckoutAreaPayments>
    </CheckoutComponents>
  );
}
