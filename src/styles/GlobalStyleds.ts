import { createGlobalStyle } from "styled-components";
import { themeLight } from "@/styles/Colors";

export type MyThemeType = {
   theme: typeof themeLight;
};

export const GlobalStyleds = createGlobalStyle<MyThemeType>`
   html {
      overflow-y: scroll;
      overscroll-behavior-y: none;
      font-size: 15px;
   }
   html, 
   body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: ${({ theme }) => theme.bgMain};
      color: ${({ theme }) => theme.txtColorMedium};
      font-family: 'Roboto', sans-serif;
      height: 100%;
   }
   ::-webkit-scrollbar { 
      width: 0 !important;
      display: none; 
   }
`;
