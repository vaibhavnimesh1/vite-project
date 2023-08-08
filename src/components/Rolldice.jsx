import { useState } from "react";
import { styled } from "styled-components";

const Rolldice = () => {
  const [currentDice, setcurrentDice] = useState();
  const generateRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  return (
    <DiceRoll>
      <div className="dice" onClick={console.log('ggh')}>
        <img src="/images/dice_1.png" alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceRoll>
  );
};

export default Rolldice;
const DiceRoll = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;

  p {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
