// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    inputBorderRadius: string;

    colors: {
      background: string;
      headerBg: string;
      cardBg: string;
      cardHeaderBg: string;

      // text
      text: string;
      text2: string;
      textMuted: string;

      // main colors
      white: string;
      primary: string;
      primaryHover: string;
      muted: string;
      disabled: string;
      danger: string;

      border: string;

      //   secondary: string;
    };
    fonts: {
      lato: string;
      inter: string;
    };
  }
}
