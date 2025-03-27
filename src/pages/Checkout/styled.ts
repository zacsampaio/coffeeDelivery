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

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme["gray-200"]};
  border-radius: 8px;
  flex-grow: 1;

  p {
    color: ${(props) => props.theme["gray-700"]};
    font-size: 0.875rem;
    padding-left: 1.875rem;
    margin-bottom: 2rem;
  }

  input {
    border: 1px solid ${(props) => props.theme["gray-500"]};
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    color: ${(props) => props.theme["gray-700"]};
    background: ${(props) => props.theme["gray-300"]};
    font-size: 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-600"]};
    }
  }
`;

export const CheckoutFormTitles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${(props) => props.theme["yellow-300"]};
  gap: 0.5rem;

  h4 {
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const CheckoutFormInputs = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr;
  gap: 1rem;

  input {
    width: 100%;
  }

  @media (min-width: 600px) {
    grid-template-columns: 12.5rem 1fr 4rem;
  }
`;

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

export const CheckoutPayments = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["gray-200"]};
  border-radius: 8px;
  padding: 2.5rem;
  width: 100%;
  max-width: 28rem;
  overflow-wrap: break-word;
  border-radius: 8px 35px 8px 35px;
  margin-bottom: 2rem;
`;

export const CheckoutTotalItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1rem;
  color: ${(props) => props.theme["gray-700"]};
  margin-bottom: 1rem;
`;

export const CheckoutDelivery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1rem;
  color: ${(props) => props.theme["gray-700"]};
  margin-bottom: 1rem;
`;
export const CheckoutTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray-800"]};
  margin-bottom: 1.5rem;
`;

export const ConfirmedButton = styled.button`
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["yellow-300"]};
  max-width: 23rem;
  width: 100%;
  height: 2.875rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 160%;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: ${(props) => props.theme["yellow-500"]};
  }
`;
