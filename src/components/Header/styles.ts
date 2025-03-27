import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`

export const LocationAndCart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

export const Localization = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${props => props.theme['purple-100']};
  color: ${props => props.theme['purple-300']};
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  gap: 0.5rem;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  height: 2.375rem;
`
