import styled, { css } from "styled-components";

type ICardLogoWrapper = {
  isActive?: boolean;
};

export const CardLogoWrapper = styled.div<ICardLogoWrapper>`
  padding: 8px 9px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: "transparent";

  border: 2px solid #d9d9d9;
  transition: 200ms;

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => theme.colors.cardBg};
      border-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
      transform: scale(1.1);
    `}
`;
