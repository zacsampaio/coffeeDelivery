import styled from "styled-components";
import { CartProps } from ".";


export const CartContainer = styled.button<CartProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.375rem; 
  height: 2.375rem; 
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  background: ${props => props.theme[props.$background]};
  color: ${props => props.theme[props.$color]};
`