import styled from "styled-components";


export const HeaderMainContainer = styled.div`

  h1{
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
  }
`

export const HeaderMainCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  flex: 1;

  @media (max-width: 1440px) {
    justify-content: flex-start; 
  }
`