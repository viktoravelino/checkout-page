import { useMemo, useState } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { Layout } from "./layout/Layout";

const initialState = {
  nameOnCard: "",
  cardNumber: "",
  expMonth: (new Date().getMonth() + 1).toString(),
  cvv: "",
  expYear: new Date().getFullYear().toString(),
};

function App() {
  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState({
    nameOnCard: "",
    cardNumber: "",
    expMonth: "",
    cvv: "",
    expYear: "",
  });

  const isButtonDisabled = useMemo(() => {
    const isError =
      Object.values(errors).filter((error) => error.length > 0).length > 0;
    const isFieldEmpty =
      Object.values(inputs).filter((input) => input.length === 0).length > 0;
    return !!isError || !!isFieldEmpty;
  }, [errors, inputs]);

  function onSubmit() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const inputMonth = Number(inputs.expMonth);
    const inputYear = Number(inputs.expYear);

    if (inputMonth < currentMonth && inputYear <= currentYear) {
      setErrors((prev) => ({
        ...prev,
        expMonth: "Date can not be in the past",
      }));

      return;
    }

    alert("Congratulation, you have paid for your purchase");

    setInputs(initialState);
  }

  return (
    <Layout>
      <FormWrapper>
        <Form
          inputs={inputs}
          onChange={setInputs}
          errors={errors}
          onError={setErrors}
        />
      </FormWrapper>
      <ButtonWrapper>
        <Button outlined>Back</Button>
        <Button disabled={isButtonDisabled} onClick={onSubmit}>
          Continue
        </Button>
      </ButtonWrapper>
    </Layout>
  );
}

const FormWrapper = styled.div`
  padding: 0 24px;
  margin: auto;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
  padding: 20px 25px;
  background: ${({ theme }) => theme.colors.cardBg};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 20px 4px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 768px) {
    margin-top: 70px;
    background: transparent;
    box-shadow: none;
    flex-direction: row;
    justify-content: center;
  }
`;

export default App;
