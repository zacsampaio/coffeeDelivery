import styled from "styled-components";


export const CountButtonComponents = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  gap: 0.5rem;
  background: ${props => props.theme['gray-400']};
`

export const CountButtonQuantity = styled.button`
  border: 0;
  background: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  
  color: ${props => props.theme['purple-300'] };
  transition: 0.1s;

  &:hover {
    color: ${props => props.theme['purple-500'] };
    transform: scale(1.5);
  }

  &:focus{
    border: none;
    outline: none;
    box-shadow: none;
  }
`

export const CountQuantity = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 160%;
`