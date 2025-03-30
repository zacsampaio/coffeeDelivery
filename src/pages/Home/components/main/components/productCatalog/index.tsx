import { Cart } from "../../../../../../components/Cart";
import {
  CardCatalagComponents,
  TagDescription,
  TagsComponents,
  TagValue,
  TagValueSpan,
} from "./styles";
import { Tag } from "../tag";
import { CountButton } from "../../../../../../components/countButton";
import { ProductsType } from "../../../../../../redux/cart/types";

interface CardCatalogProps {
  product: ProductsType
}

export function CardCatalag({ product }: CardCatalogProps) {
  const getImage = (name: string) => {
    const imageUrl = `/assets/coffee/${name}.svg`;
    return imageUrl || "/assets/coffee/default.svg";
  };

  

  return (
    <CardCatalagComponents>
      <img src={getImage(product.name)} />
      <TagsComponents>
        {product.tags?.map((tag, index) => (
          <Tag key={index} title={tag} />
        ))}
      </TagsComponents>
      <h3>{product.name}</h3>
      <TagDescription>{product.description}</TagDescription>
      <TagValue>
        <p>
          R$ <TagValueSpan>{product.price.toFixed(2)}</TagValueSpan>
        </p>
        <CountButton
          product={product}
        />
        <Cart $color="gray-100" $background="purple-500" />
      </TagValue>
    </CardCatalagComponents>
  );
}
