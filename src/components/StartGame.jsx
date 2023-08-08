// import React from 'react'
import styled from "styled-components";

export default function StartGame({toggle}) {
  return (
    <div>
      <Container>
        <div>
          <Image src="images/dice.png" alt="" />
        </div>
        <div className="content">
          <H1>Dice Game</H1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  /* height: 100vh; */
  display: inline-flex;
  padding: 55px 129px 154px 129px;
  justify-content: center;
  align-items: center;

  .content {
    h1 {
      white-space: nowrap;
    }

  }
`;

const Image = styled.img`
  width: 649px;
  height: 522px;
`;

const H1 = styled.h1`
  color: #000;
  font-family: Poppins;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Button = styled.button`
  background: #000;
  color: white;
  min-width: 220px;
  border-radius: 5px;
  border: none;
  display: flex;
  padding: 10px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  &:hover{
    background-color : red;
    transition: 0.2s ease-in-out;
  }
`;
