import styled from "styled-components";

import background from "../../assets/background1.png"

export const Container = styled.div`
background: url("${background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100vh;
min-height: 100vh;
`;

export const Image = styled.img`
margin-top: 30px;

`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
background: rgba(255, 255, 255, 0.25);

border-radius: 14px;

width: 342px;
height: 58px;
border: none;
outline: none;



p{
 font-style: normal;
 font-weight: 300;
 font-size: 20px;
 line-height: 28px;
 color: #ffff;
 
 
}

button {
    background: none;
    border: none;
    cursor: pointer;
    
}


`;