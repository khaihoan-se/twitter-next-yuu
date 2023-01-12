import React from "react";
import Header from "@/components/partials/header/Header";
import {
   AppStyled,
   MainStyled,
   MainStyledContainer,
   MainStyledContainerWrapper,
   MainStyledContainerWrapperMain,
   PageStyled,
} from "./BaseLayoutStyled";
import PageRight from "../partials/right/PageRight";
import { IChildrenType } from "@/@types";

const BaseLayout = ({ children }: IChildrenType) => {
   return (
      <AppStyled>
         <Header />
         <MainStyled>
            <MainStyledContainer>
               <MainStyledContainerWrapper>
                  <MainStyledContainerWrapperMain>
                     {/* Main Page */}
                     <PageStyled>{children}</PageStyled>
                     {/* Page Right */}
                     <PageRight />
                  </MainStyledContainerWrapperMain>
               </MainStyledContainerWrapper>
            </MainStyledContainer>
         </MainStyled>
      </AppStyled>
   );
};

export default BaseLayout;
