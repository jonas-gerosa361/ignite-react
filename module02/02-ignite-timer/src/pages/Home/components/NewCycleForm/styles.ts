import styled from "styled-components";

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
