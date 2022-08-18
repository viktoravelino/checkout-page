import styled from "styled-components";
import arrowDownSvg from "../../assets/images/arrow-down.svg";

type ISelectStyledProps = {
  error?: boolean;
};

export const SelectStyled = styled.select<ISelectStyledProps>`
  padding: 13px 14.5px;
  border-radius: ${({ theme }) => theme.inputBorderRadius};
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.danger : theme.colors.border)};
  background: transparent;

  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
`;

export const StyledLabel = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.danger};
  letter-spacing: 0.02em;
  line-height: 1rem;
`;
