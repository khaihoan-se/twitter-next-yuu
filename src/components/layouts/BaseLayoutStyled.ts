import styled from "styled-components";

export const AppStyled = styled.div`
   min-height: 100vh;
   width: 100%;
   z-index: 0;
   flex-direction: row;
   display: flex;
`;

export const MainStyled = styled.main`
   align-items: flex-start;
   flex-shrink: 1;
   flex-grow: 1;
   display: flex;
   flex-basis: auto;
   flex-direction: column;
`;

export const MainStyledContainer = styled.div`
   flex-shrink: 1;
   flex-grow: 1;
   width: 990px;
   display: flex;
   flex-basis: auto;
   flex-direction: column;
`;
export const MainStyledContainerWrapper = styled.div`
   backface-visibility: hidden;
   flex-grow: 1;
   width: 100%;
   display: flex;
   flex-basis: auto;
   flex-direction: column;
`;
export const MainStyledContainerWrapperMain = styled.div`
   background-color: rgba(0, 0, 0, 0);
   align-items: stretch;
   justify-content: space-between;
   flex-grow: 1;
   flex-direction: row;
   width: 100%;
   min-height: 100%;
   display: flex;
`;
export const PageStyled = styled.div`
   max-width: 600px;
   margin-right: 0px;
   margin-left: 0px;
   z-index: 1;
   width: 100%;
   background-color: ${({ theme }) => theme.bgMain};
   border-right: ${({ theme }) => `1px solid ${theme.bdLayout}`};
   border-left: ${({ theme }) => `1px solid ${theme.bdLayout}`};
   display: flex;
   flex-basis: auto;
   flex-direction: column;
`;
