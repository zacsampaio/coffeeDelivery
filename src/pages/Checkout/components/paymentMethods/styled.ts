import styled from "styled-components";


export const CheckoutPaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme["gray-200"]};
  border-radius: 8px;
  height: fit-content;

  p {
    color: ${(props) => props.theme["gray-700"]};
    font-size: 0.875rem;
    padding-left: 1.875rem;
  }
`;

export const CheckoutPaymentMethodsTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${(props) => props.theme["purple-300"]};
  gap: 0.5rem;

  h4 {
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const CheckoutPaymentMethodsButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-grow: 1;
    height: 3.1875rem;
    gap: 1rem;
    padding: 1rem;
    background: ${(props) => props.theme["gray-400"]};
    cursor: pointer;
    border-radius: 8px;
    color: ${(props) => props.theme["purple-300"]};

    h5 {
      color: ${(props) => props.theme["gray-700"]};
    }

    &:hover {
      background: ${(props) => props.theme["gray-500"]};
    }

    @media (min-width: 480px) {
      flex: 1 1 auto;
    }
  }
`;