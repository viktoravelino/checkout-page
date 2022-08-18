import { Container, Logo, LogoName, Wrapper } from "./Header.styles";

export function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <LogoName />
      </Container>
    </Wrapper>
  );
}
