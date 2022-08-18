import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./Button.styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outlined?: boolean;
};

export function Button({ children, ...props }: IButtonProps) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
