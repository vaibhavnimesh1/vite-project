import { styled } from "styled-components";
import NumberSelecter from "./NumberSelecter";
import TotalScore from "./TotalScore";
import Rolldice from "./rolldice";


function GamePlay() {
  return (
    <Main>
      <div className="top">
        <TotalScore />
        <NumberSelecter />
      </div>
   
        <Rolldice/>
    </Main>
  );
}

export default GamePlay;

const Main = styled.div`
/* display: flex;
flex-direction: column;
align-items: end; */
.top{
  max-width: 90%;
   display: flex;
   align-items: center;
   justify-content: space-between;
  }
`;
