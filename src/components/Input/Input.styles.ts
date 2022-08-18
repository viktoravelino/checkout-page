import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

interface IStyledInputProps {
  error?: boolean;
}

export const StyledInput = styled.input<IStyledInputProps>`
  padding: 0.812rem 0.906rem;
  outline: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  background: transparent;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.danger : theme.colors.border)};

  border-radius: ${({ theme }) => theme.inputBorderRadius};

  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  transition: 200ms;
  z-index: 1;
  &:focus {
    border: 1.5px solid
      ${({ theme, error }) =>
        error ? theme.colors.danger : theme.colors.border};
    outline: none;
  }

  & + label {
    color: ${({ theme, error }) =>
      error ? theme.colors.danger : theme.colors.textMuted};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translate(-0.4rem, -0.7rem) scale(0.7);
    z-index: 2;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  background: white;
  padding: 0 0.1rem;
  transform: translate(1rem, 0.812rem);
  transition: all 200ms;
  top: 0;
  left: 0;
  z-index: 0;

  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;

  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Message = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.danger};
  letter-spacing: 0.02em;
  line-height: 1rem;
`;
