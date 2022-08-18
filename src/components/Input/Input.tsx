import { InputHTMLAttributes } from "react";
import {
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  Message,
} from "./Input.styles";

type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  errorMessage?: string;
};

export function Input({
  type = "text",
  error = false,
  errorMessage,
  style,
  placeholder,
  ...props
}: IInputProps) {
  return (
    <StyledInputWrapper style={style}>
      <StyledInput error={error} type={type} placeholder=" " {...props} />
      <StyledLabel>{placeholder}</StyledLabel>
      {error && errorMessage && <Message>{errorMessage}</Message>}
    </StyledInputWrapper>
  );
}
