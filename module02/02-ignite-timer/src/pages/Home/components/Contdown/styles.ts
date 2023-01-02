import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;

  @media (max-width: 980px) {
    font-size: 2rem;
    line-height: 2rem;
    gap: .25rem;
  }

  span {
    background-color: ${props => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme["green-500"]};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 980px) {
    width: 2rem;
  }
`;
