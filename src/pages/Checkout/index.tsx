import {
  CheckoutAreaForm,
  CheckoutComponents,
  CheckoutAreaPayments,
} from "./styled";
import { Form } from "./components/formAddress";
import { PaymentMethods } from "./components/paymentMethods";
import { CartTotalPayments } from "./components/cartTotalPayments";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/cart/slice";


export function Checkout() {
  const [isFormValid, setIsFormValid] = useState(false);
  const paymentMethod = useSelector((state: RootState) => state.paymentMethod);
  const address = useSelector((state: RootState) => state.address);
  const { products } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const valueProducts = useMemo(
    () => products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    [products]
  );

  const valueDelivery = valueProducts > 0 ? 5 : 0;
  const totalValue = valueProducts + valueDelivery;

  const handleFormValidation = (valid: boolean) => {
    setIsFormValid(valid);
  };

  const handleCreateOrder = () => {
    if ( !isFormValid || !address.zipCode || !address.street || !address.number || !address.neighborhood || !address.city || !address.state) {
      alert("Por favor, preencha todos os campos do endereço.");
      return;
    } else if (products.length === 0) {
      alert("Por favor, adicione itens ao carrinho.");
      return
    } else if (!paymentMethod){
      alert("Por favor, selecione a forma de pagamento.");
      return
    }

    const order = {
      products,
      address,
      total: totalValue,
      delivery: valueDelivery,
      paymentMethod,
    };

    const previousOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    previousOrders.push(order);

    localStorage.setItem("orders", JSON.stringify(previousOrders));

    dispatch(clearCart());

    navigate("/confirmed");
  };

  return (
    <CheckoutComponents>
      <CheckoutAreaForm>
        <h3>Complete seu pedido</h3>
        <Form onFormValidation={handleFormValidation} />

        <PaymentMethods isFormValid={isFormValid} />
      </CheckoutAreaForm>

      <CheckoutAreaPayments>
        <h3>Cafés selecionados</h3>
        <CartTotalPayments
          onConfirmOrder={handleCreateOrder}
          valueProducts={valueProducts}
          valueDelivery={valueDelivery}
          totalValue={totalValue}
          products={products}
        />
      </CheckoutAreaPayments>
    </CheckoutComponents>
  );
}
