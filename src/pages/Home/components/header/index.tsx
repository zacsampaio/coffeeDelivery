import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeHeader from "/assets/coffee-header.svg";
import {
  HeaderHomeContainer,
  HeaderHomeItems,
  HeaderHomeTitles,
  ItemCart,
  ItemCoffee,
  ItemPackage,
  ItemTimer,
} from "./styles";

export function HeaderHome() {
  return (
    <HeaderHomeContainer>
      <HeaderHomeTitles>
        <h1>Encontre o café perfeito</h1>
        <h1>para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <HeaderHomeItems>
          <span>
            <ItemCart><ShoppingCart size={16} weight="fill" /></ItemCart> Compra simples e segura 
          </span>
          <span>
            <ItemPackage> <Package size={16} weight="fill" /></ItemPackage>
            Embalagem mantém o café intacto
          </span>
          <span>
            <ItemTimer><Timer size={16} weight="fill" /></ItemTimer>
            Entrega rápida e rastreada
          </span>
          <span>
            <ItemCoffee><Coffee size={16} weight="fill" /></ItemCoffee>O café chega fresquinho até você
          </span>
        </HeaderHomeItems>
      </HeaderHomeTitles>
      <img src={coffeeHeader} />
    </HeaderHomeContainer>
  );
}
