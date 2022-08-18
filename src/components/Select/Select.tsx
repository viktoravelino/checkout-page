import { SelectHTMLAttributes } from "react";
import { SelectStyled, StyledLabel } from "./Select.styles";

type ISelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: {
    label: string;
    value: string;
  }[];
  error?: boolean;
  errorMessage?: string;
};

export function Select({
  error,
  errorMessage,
  options,
  placeholder,
  ...props
}: ISelectProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SelectStyled error={error} {...props}>
        {placeholder && <option value="placeholder">{placeholder}</option>}
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </SelectStyled>
      {error && errorMessage && <StyledLabel>{errorMessage}</StyledLabel>}
    </div>
  );
}
