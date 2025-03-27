import styled from "styled-components";

export const CardCatalagComponents = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  height: 20rem;
  background: ${(props) => props.theme["gray-200"]};
  border-radius: 8px 35px 8px 35px;

  img {
    margin-top: calc(0px - 1.3rem - 1px);
  }

  h3 {
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.125rem;
  }
`;

export const TagDescription = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
  flex-wrap: wrap;
  padding: 8px;
  color: ${(props) => props.theme["gray-600"]};
  font-weight: 500;
`;

export const TagValue = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 1rem 1.5rem 1rem;

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};
  }
`;
export const TagValueSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme["gray-700"]};
  font-family: "Baloo 2", sans-serif;
  margin-right: 1rem;
`;

export const TagsComponents = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`
