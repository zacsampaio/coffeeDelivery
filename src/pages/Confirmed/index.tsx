import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  ConfirmedInfo,
  ConfirmedArea,
  ConfirmedAreaDelivery,
  ConfirmedContainer,
  InnerContainer,
  ItemAddress,
  ItemDolar,
  ItemTimer,
} from "./styled";
import confirmedImg from "../../../public/assets/Confimed.svg";

export function Confirmed() {
  const address = {
    street: "Rua João Daniel Martinelli",
    number: "102",
    neighborhood: "Farrapos",
    city: "Porto Alegre",
    state: "RS",
  };

  const deliveryTime = {
    min: 30,
    max: 50,
  };

  const paymentMethod = "Cartão de Crédito";

  return (
    <ConfirmedContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <ConfirmedArea>
        <ConfirmedAreaDelivery>
          <InnerContainer>
            <ConfirmedInfo>
              <ItemAddress>
                <MapPin size={16} weight="fill" />
              </ItemAddress>
              <div>
                <span>
                  Entrega em{" "}
                  <strong>
                    {address.street}, {address.number}
                  </strong>
                </span>
                <span>
                  {address.neighborhood} - {address.city}, {address.state}
                </span>
              </div>
            </ConfirmedInfo>
            <ConfirmedInfo>
              <ItemTimer>
                <Timer size={16} weight="fill" />
              </ItemTimer>
              <div>
                <p>Previsão de entrega</p>
                <strong>
                  {deliveryTime.min} min - {deliveryTime.max} min
                </strong>
              </div>
            </ConfirmedInfo>
            <ConfirmedInfo>
              <ItemDolar>
                <CurrencyDollar size={16} weight="fill" />
              </ItemDolar>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{paymentMethod}</strong>
              </div>
            </ConfirmedInfo>
          </InnerContainer>
        </ConfirmedAreaDelivery>
        <img src={confirmedImg} alt="Imagem de confirmação" />
      </ConfirmedArea>
    </ConfirmedContainer>
  );
}
