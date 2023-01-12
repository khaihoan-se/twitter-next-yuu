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
import { NextPageWithLayout } from "@/@types/page";
import BaseLayout from "@/components/layouts/BaseLayout";

// this should give a better typing
type NextPageWithLayoutProps = AppProps & {
   Component: NextPageWithLayout;
};
function App({ Component, pageProps }: NextPageWithLayoutProps) {
   const getLayout =
      // @ts-ignore
      Component.getLayout ||
      ((page: React.ReactNode) => <BaseLayout>{page}</BaseLayout>);
   return (
      <ThemeProvider theme={{ ...themeDark, ...themeBlue }}>
         <GlobalStyleds />
         {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
   );
}

// @ts-ignore
export default appWithTranslation(App, nextI18nextConfig);
