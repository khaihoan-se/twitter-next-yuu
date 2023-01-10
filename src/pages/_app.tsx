import type { AppProps } from "next/app";
import React from "react";
import { GlobalStyleds } from "../styles/GlobalStyleds";
import { appWithTranslation } from "next-i18next";
import nextI18nextConfig from "next-i18next.config";
import { ThemeProvider } from "styled-components";
import {
   themeDark,
   themeLight,
   themeBlue,
   themeYellow,
   themePink,
   themeViolet,
   themeOrange,
   themeGreen,
} from "@/styles/Colors";

function App({ Component, pageProps }: AppProps) {
   return (
      <React.Fragment>
         <ThemeProvider theme={{ ...themeLight, ...themeBlue }}>
            <GlobalStyleds />
            <Component {...pageProps} />
         </ThemeProvider>
      </React.Fragment>
   );
}
// @ts-ignore
export default appWithTranslation(App, nextI18nextConfig);
