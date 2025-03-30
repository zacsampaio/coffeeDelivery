import styled from "styled-components";

export const CheckoutComponents = styled.div`
  background: ${(props) => props.theme["white"]};
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 448px;
  }
`;

export const CheckoutAreaForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-800"]};
  }
`;


export const CheckoutAreaPayments = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-800"]};
  }
`;


