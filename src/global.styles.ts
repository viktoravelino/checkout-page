import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input,
textarea,
button {
  font-family: ${({ theme }) => theme.fonts.lato};
  font-weight: 400;
  font-size: 1rem;
}

body {
    background: ${({ theme }) => theme.colors.background}
}

`;
