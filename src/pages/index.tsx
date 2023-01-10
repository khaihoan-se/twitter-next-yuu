import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import React from "react";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LoginPage: NextPage = () => {
   const { t } = useTranslation("common");
   return (
      <React.Fragment>
         <Wrapper>{t("content")}</Wrapper>
      </React.Fragment>
   );
};
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
   props: {
      ...(await serverSideTranslations(locale, ["common"])),
   },
});
const Wrapper = styled.div`
   color: ${({ theme }) => theme.txtColorMedium};
`;

export default LoginPage;
