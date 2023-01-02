import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 980px) {
    flex: 0;
    margin-top: 2rem;
    height: fit-content;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;

    > div:first-of-type {
      display: flex;
      gap: .5rem;

      @media (max-width: 980px) {
        flex-wrap: wrap;
      }
    }
  }
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .5rem;
  font-weight: bold;

  cursor: pointer;
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${props => props.theme["green-700"]};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["red-500"]};
  color: ${props => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${props => props.theme["red-700"]};
  }
`
