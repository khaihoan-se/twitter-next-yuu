import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import React from "react";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LoginPage: NextPage = () => {
   const { t } = useTranslation("common");
   return (
      <React.Fragment>
         <Wrapper>
            {t("content")}
            <Container>Hello I am color main!</Container>
            <Button>Follow</Button>
            <BoxTrend></BoxTrend>
            <ButtonTwo>&</ButtonTwo>
         </Wrapper>
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
   padding: 50px;
`;
const Container = styled.div`
   color: ${({ theme }) => theme.colorMain};
`;
const Button = styled.div`
   min-height: 32px;
   min-width: 32px;
   max-width: 70px;
   background: ${({ theme }) => theme.bgButtonReverse};
   display: flex;
   align-items: center;
   justify-content: center;
   padding-left: 16px;
   padding-right: 16px;
   color: ${({ theme }) => theme.txtColorReverse};
   border-radius: 9999px;
   font-size: 15px;
   font-weight: 700;
   cursor: pointer;
   border: ${({ theme }) => `1px solid ${theme.bdLayout}`};
`;
const ButtonTwo = styled.div`
   min-height: 36px;
   min-width: 36px;
   display: flex;
   align-items: center;
   justify-content: center;
   border: ${({ theme }) => `1px solid ${theme.bdLayout}`};
   border-radius: 50%;
   width: 36px;
`;
const BoxTrend = styled.div`
   margin-top: 30px;
   height: 300px;
   width: 300px;
   background-color: ${({ theme }) => theme.bgExtra};
   border-radius: 16px;
   border: ${({ theme }) => `1px solid ${theme.bdLayout}`};
   &:hover {
      background-color: ${({ theme }) => theme.bgHoverExtra};
   }
`;
export default LoginPage;
