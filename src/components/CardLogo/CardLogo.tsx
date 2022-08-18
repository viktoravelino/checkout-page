import React from "react";
import mastercardLogo from "../../assets/images/master-logo.png";
import visaLogo from "../../assets/images/visa-logo.png";
import { CardLogoWrapper } from "./CardLogo.styles";

const cardTypesLogo = {
  visa: visaLogo,
  master: mastercardLogo,
};

type ICardLogoProps = {
  isActive?: boolean;
  cardType?: "visa" | "master";
};

export function CardLogo({
  isActive = false,
  cardType = "visa",
}: ICardLogoProps) {
  return (
    <CardLogoWrapper isActive={isActive}>
      <img src={cardTypesLogo[cardType]} width={45} />
    </CardLogoWrapper>
  );
}
