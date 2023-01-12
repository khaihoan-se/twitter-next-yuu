import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LoginPage: NextPage = () => {
   return <React.Fragment>Page Login</React.Fragment>;
};
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
   props: {
      ...(await serverSideTranslations(locale, ["common"])),
   },
});
export default LoginPage;
