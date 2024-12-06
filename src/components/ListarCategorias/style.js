import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';


const breakpoints = {
  mobile: '470px',
  tablet: '788px',
};

export const StyledDiv = styled.div`
   width:90vw;
   display:flex;
   flex-direction:column;
   justify-content:center;
   justify-items:center;
   padding-top:50px;
   padding:5px;
  
`;


export const StyledButton = styled.button`
    background-color:transparent;
    border:0px;
    
    @media (max-width: ${breakpoints.mobile}) {
      display:none;
      

  }
    

`;


export const StyledButton2 = styled.button`
    background-color:transparent;
    border:0px;
    display:none;
    
    @media (max-width: ${breakpoints.mobile}) {
      display:block;
      

  }
    

`;

export const StyledImg = styled.img`
  width:20%;

  @media (max-width: ${breakpoints.tablet}) {
    width:45px;
    
  }
    
`;


export const StyledDivPrimary = styled.div`
    width:100%;
    heigth:100vh;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center ;
    gap: 10px;
    background-color:black;
    
    @media (max-width: ${breakpoints.mobile}){
      flex-wrap: wrap;
      flex-direction:column;
      gap:0px;
    }
`;

export const StyledDivMobile = styled.div`
  display:flex;
  margin-top:30%;
  gap:10px;
`;