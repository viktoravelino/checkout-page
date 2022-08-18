import { MONTHS_ARRAY, YEARS_ARRAY } from "../../lib/contants";
import { CardLogo } from "../CardLogo";
import { Input } from "../Input";
import { Select } from "../Select";
import {
  Container,
  FormBody,
  FormHeader,
  FormHeaderText,
  InputForm,
  Row,
} from "./Form.styles";

type IInputsData = {
  nameOnCard: string;
  cardNumber: string;
  expMonth: string;
  cvv: string;
  expYear: string;
};

type IFormProps = {
  inputs: IInputsData;
  errors: IInputsData;
  onChange: React.Dispatch<React.SetStateAction<IInputsData>>;
  onError: React.Dispatch<React.SetStateAction<IInputsData>>;
};

export function Form({ inputs, onChange, errors, onError }: IFormProps) {
  return (
    <Container>
      <FormHeader>
        <FormHeaderText>We only accept Master and Visa</FormHeaderText>
        <div style={{ display: "flex", marginTop: "8px", gap: "16px" }}>
          <CardLogo
            cardType="master"
            isActive={validators.cardNumber(inputs.cardNumber) == "master"}
          />
          <CardLogo
            cardType="visa"
            isActive={validators.cardNumber(inputs.cardNumber) == "visa"}
          />
        </div>
      </FormHeader>

      <FormBody>
        <Input
          placeholder="Name On Card"
          name="nameOnCard"
          value={inputs.nameOnCard}
          error={!!errors.nameOnCard}
          errorMessage={errors.nameOnCard}
          onChange={(e) => {
            onError((prev) => ({ ...prev, nameOnCard: "" }));
            onChange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <Input
          placeholder="Card Number"
          name="cardNumber"
          type="text"
          max={16}
          error={!!errors.cardNumber}
          errorMessage={errors.cardNumber}
          value={inputs.cardNumber}
          onChange={(e) => {
            const hasMaxLength = e.target.value.length > 16;
            const hasText = !!e.target.value;
            const isNumber = !!Number(e.target.value);

            if (hasMaxLength || (hasText && !isNumber)) {
              onChange((prev) => {
                return { ...prev };
              });
              return;
            }

            const isCardValid = validators.cardNumber(e.target.value);
            console.log(isCardValid);
            if (!isCardValid) {
              onError((prev) => ({
                ...prev,
                [e.target.name]: "Card number is not valid.",
              }));
            } else {
              onError((prev) => ({
                ...prev,
                [e.target.name]: "",
              }));
            }

            onChange((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
        />

        <Row>
          <div
            style={{
              flex: 1,
              display: "flex",
              gap: "11px",
            }}
          >
            <Select
              options={MONTHS_ARRAY}
              style={{ flex: 1 }}
              value={inputs.expMonth}
              name="expMonth"
              error={!!errors.expMonth}
              errorMessage={errors.expMonth}
              onChange={(e) => {
                onChange((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
                onError((prev) => ({ ...prev, expMonth: "" }));
              }}
            />
            <Select
              options={YEARS_ARRAY}
              style={{ flex: 1 }}
              name="expYear"
              error={!!errors.expMonth}
              value={inputs.expYear}
              onChange={(e) => {
                onChange((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));

                onError((prev) => ({ ...prev, expMonth: "" }));
              }}
            />
          </div>
          <InputForm
            type="number"
            maxLength={3}
            placeholder="CSC/CVV"
            style={{ width: "100%" }}
            value={inputs.cvv}
            error={!!errors.cvv}
            errorMessage={errors.cvv}
            name="cvv"
            onChange={(e) => {
              const isValid = validators.cvv(e.target.value);
              if (!isValid) {
                onError((prev) => ({
                  ...prev,
                  [e.target.name]: "Security code number invalid.",
                }));
              } else {
                onError((prev) => ({
                  ...prev,
                  [e.target.name]: "",
                }));
              }
              onChange((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </Row>
      </FormBody>
    </Container>
  );
}

const validators = {
  cardNumber: (number: string): "visa" | "master" | false => {
    const visaReg = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const masterReg = /^(?:5[1-5][0-9]{14})$/;

    return number.match(visaReg) !== null
      ? "visa"
      : number.match(masterReg) !== null
      ? "master"
      : false;
  },
  cvv: (number: string) => {
    const cvvReg = /[0-9]{3}/;
    return number.match(cvvReg) !== null;
  },
};
