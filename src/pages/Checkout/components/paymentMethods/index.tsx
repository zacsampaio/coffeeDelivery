import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { CheckoutPaymentMethods, CheckoutPaymentMethodsButtons, CheckoutPaymentMethodsTitle } from "./styled";

export function PaymentMethods() {
  return (
    <CheckoutPaymentMethods>
      <CheckoutPaymentMethodsTitle>
        <CurrencyDollar size={22} />
        <h4>Pagamento</h4>
      </CheckoutPaymentMethodsTitle>
      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
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
  );
}
