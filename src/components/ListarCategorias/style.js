import styled from 'styled-components';
import React from 'react';


const breakpoints = {
  mobile: '480px',
  tablet: '788px',
};

export const StyledDiv = styled.div`
    width:80vw;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center ;
    margin-top:10px auto;
   gap:10px;

   @media (max-width: ${breakpoints.mobile}) {
      width:100%;
      height:57vh;
      margin-top:30%;
      

  }
`;


export const StyledButton = styled.button`
    background-color:transparent;
    border:0px;
    

`;

export const StyledImg = styled.img`
  width:30%;

  @media (max-width: ${breakpoints.tablet}) {
    width:45%;
    
  }
`;


export const StyledDivPrimary = styled.div`
    width:100vw;
    heigth:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center ;
    gap: 10px;
`;