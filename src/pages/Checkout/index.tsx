import {
  CheckoutAreaForm,
  CheckoutComponents,
  CheckoutAreaPayments,
} from "./styled";

import { Form } from "./components/form";
import { PaymentMethods } from "./components/paymentMethods";
import { CartTotalPayments } from "./cartTotalPayments";

export function Checkout() {
  
  return (
    <CheckoutComponents>
      <CheckoutAreaForm>
        <h3>Complete seu pedido</h3>
        <Form />

        <PaymentMethods />
      </CheckoutAreaForm>

      <CheckoutAreaPayments>
        <h3>Cafés selecionados</h3>
        <CartTotalPayments />
      </CheckoutAreaPayments>
    </CheckoutComponents>
  );
}
