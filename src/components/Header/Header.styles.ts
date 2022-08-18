import styled from "styled-components";
import logoSvg from "../../assets/images/logo.svg";
import logoNameSvg from "../../assets/images/logo-name.svg";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBg};
  width: 100%;
  padding: 0.375rem 1.562rem;

  @media screen and (min-width: 768px) {
    padding: 0.75rem 1.562rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1048px;
  margin: 0 auto;
`;

export const Logo = styled.img.attrs({ src: logoSvg })`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoName = styled.img.attrs({ src: logoNameSvg })`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
