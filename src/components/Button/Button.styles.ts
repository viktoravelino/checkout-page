import styled from "styled-components";

type IButtonProps = {
  outlined?: boolean;
};

export const ButtonStyled = styled.button<IButtonProps>`
  cursor: pointer;
  background: ${({ theme, outlined }) =>
    outlined ? "transparent" : theme.colors.primary};
  border: ${({ theme, outlined }) =>
    outlined ? "1px solid " + theme.colors.primary : 0};
  border-radius: 6px;

  padding: 13px 39px;

  color: ${({ theme, outlined }) =>
    outlined ? theme.colors.primary : theme.colors.white};
  font-size: 1rem;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 0.2px;
  transition: 100ms;

  &:hover {
    background: ${({ theme, outlined }) =>
      outlined ? "" : theme.colors.primaryHover};
    filter: ${({ outlined }) => (outlined ? "brightness(0.5)" : "")};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.disabled};
  }
`;
