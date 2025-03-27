import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoImg from "/assets/logo-coffee-delivery.svg";
import { Localization, LocationAndCart, NavContainer } from "./styles";
import { Cart } from "../Cart";

export function Header() {
  return (
    <NavContainer>
      <NavLink to="/" title="Coffee-Delivery">
        <img src={logoImg} height={'40'}/>
      </NavLink>
      <LocationAndCart>
        <Localization> <MapPin size={20} weight="fill" /> Fortaleza, CE</Localization>
        <Cart $color='yellow-500' $background='yellow-100'/>
      </LocationAndCart>
    </NavContainer>
  );
}
