import styled from "styled-components";
import { Input } from "../Input";

export const Container = styled.div`
  max-width: 502px;
  width: 100%;
  box-shadow: 0 4px 30px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.cardBg};
  overflow: hidden;
`;

export const FormHeader = styled.div`
  background: ${({ theme }) => theme.colors.cardHeaderBg};
  padding: 21px 26px 18px 26px;
`;

export const FormHeaderText = styled.span`
  font-size: 1rem;
  line-height: 24px;
`;

export const FormBody = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 29px 15px 38px 15px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 39px;
  }
`;

export const InputForm = styled(Input)`
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
