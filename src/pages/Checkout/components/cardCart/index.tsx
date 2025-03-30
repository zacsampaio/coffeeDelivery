import { CountButton } from "../../../../components/countButton";
import { CardCartComponents, CardCartComponentsButtons } from "./styled";
import { RemoveButton } from "../../../../components/removeButton";
import { ProductsType } from "../../../../redux/cart/action-types";

interface CardCartProps {
  product: ProductsType;
}

export function CardCart({ product} : CardCartProps) {

  const getImage = (name:string) => {
    const imageUrl = `/assets/coffee/${name}.svg`;

    return imageUrl || "/assets/coffee/default.svg";
  };

  return (
    <CardCartComponents>
      <img src={getImage(product.name)} />
      <div>
        <h3>{product.name}</h3>
        <CardCartComponentsButtons>
          <CountButton
            key={product.id}
            product={product}
          />
          <RemoveButton 
            product={product}
          />
        </CardCartComponentsButtons>
      </div>
      <p>R$ {product.price.toFixed(2)}</p>
    </CardCartComponents>
  );
}
