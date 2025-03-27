import { CountButton } from "../../../../components/countButton";
import img from "../../../../../public/assets/coffee/Expresso Tradicional.svg";
import { CardCartComponents, CardCartComponentsButtons } from "./styled";
import { RemoveButton } from "../../../../components/removeButton";

export function CardCart() {
  return (
    <CardCartComponents>
      <img src={img} />
      <div>
        <h3>Expresso Tradicional</h3>
        <CardCartComponentsButtons>
          <CountButton />
          <RemoveButton />
        </CardCartComponentsButtons>
      </div>
      <p>R$ 9,90</p>
    </CardCartComponents>
  );
}
