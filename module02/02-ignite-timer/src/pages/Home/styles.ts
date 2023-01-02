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

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  color: ${props => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    font-size: 1rem;
  }

  label, span {
    align-self: center;
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 1px solid ${props => props.theme["gray-500"]};
  font-weight: bold;
  font-size: inherit;
  padding: 0 .5rem;
  color: ${props => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${props => props.theme["gray-500"]};

  }
`

export const TaskINput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesDurationInput = styled(BaseInput)`
  width: 4rem;
`;

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
