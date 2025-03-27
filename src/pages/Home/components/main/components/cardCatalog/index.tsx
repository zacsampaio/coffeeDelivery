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

interface CardCatalogProps {
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export function CardCatalag({tags, name, description, price}: CardCatalogProps) {
  const getImage = (name:string) => {
    const imageUrl = `/assets/coffee/${name}.svg`;

    return imageUrl || "/assets/coffee/default.svg";
  };
  
  
  return (
    <CardCatalagComponents>
      <img src={getImage(name)} />
      <TagsComponents>
        {tags.map(item => <Tag title={item} /> )}
      </TagsComponents>
      <h3>{name}</h3>
      <TagDescription>
        {description}
      </TagDescription>
      <TagValue>
        <p>
          R$ <TagValueSpan>{price.toFixed(2)}</TagValueSpan>
        </p>
        <CountButton />
        <Cart $color="gray-100" $background="purple-500" />
      </TagValue>
    </CardCatalagComponents>
  );
}
