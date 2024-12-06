import styled from 'styled-components';
import React from 'react';


const breakpoints = {
  mobile: '480px',
  tablet: '788px',
};

export const StyledDiv = styled.div`
    width: 50vw;
    heigth:600px;
    margin: 10px;
    padding:18px;
    position:relative;
    box-sizing: border-box;
    border: 2px solid lightgrey;
    border-radius: 20px;
    text-align: center;
    justify:content:center;
    transition-duration: 0.5s;
    background-color:light black;
    max-height:90vh;
    &:hover{

        box-shadow: 1px 1px 10px black;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width:500wh;
      height:57vh;
      margin-top:30%;

  }

    @media (max-width: ${breakpoints.mobile}) {
      width:700wh;
      height:57vh;
      margin-top:30%;
      

  }
    
    
`;

export const StyledName = styled.h1`
  font-size: 18px;
  color: #333;
  text-align: center;
  color:white;
  width:100%;

  border:2px solid lightgrey;
  border-radius:2px;
  padding:2px;

    &:hover{
      color:lightblue;
      box-shadow:1px 1px 10px black;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size:31px;
    }


    @media (max-width: ${breakpoints.mobile}) {
      font-size:18px;

    }


  `;

export const StyledInfo = styled.p`
    fount-size:15px;
    color:white;

    &:hover{
      transform:scale(1.07);
      color: lightblue;

    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size:12px;
      
    }
    
  `;

export const StyledImg = styled.img`
    width:80%;
    border-radius:10px;

    &:hover{
      transform:scale(1.04);

    }

    @media (max-width: ${breakpoints.tablet}) {
    width:85%;
    
  }

  @media (max-width: ${breakpoints.tablet}) {
    width:85%;
    
  }

  `;
