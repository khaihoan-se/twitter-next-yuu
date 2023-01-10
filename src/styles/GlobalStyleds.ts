import { createGlobalStyle } from "styled-components";
import { themeLight } from "@/styles/Colors";

export type MyThemeType = {
   theme: typeof themeLight;
};

export const GlobalStyleds = createGlobalStyle<MyThemeType>`
   :root {
      --color-red: blue;
   }

   html, 
   body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: ${({ theme }) => theme.bgMain};
      color: ${({ theme }) => theme.txtColorMedium};
      font-family: 'Roboto', sans-serif;
   }
   div {
      display: block;
   }
`;
