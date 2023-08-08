import styled from "styled-components";
const totalscore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default totalscore;

const ScoreContainer = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  padding: 100px 150px;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 100px;
    width: 62px;
    height: 112px;
    line-height: 100px;
  }

  p {white-space:no-wrap;
    font-size: 24px;
    font-weight: 500;
  }
`;
