import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 76px;
background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#ED3237'} ;

border: ${props => props.isBack ? '' : 'none'};

font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 28px;
color: #FFFFFF;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 15px;

&:hover{
    opacity: 0.8;
&:active{
    opacity: 0.5;
    }
}

`;