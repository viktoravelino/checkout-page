import { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";

interface ILayoutProps {
  children: ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <Wrapper>
      <Header />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
