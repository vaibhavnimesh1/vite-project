import { useState } from "react";
import styled from "styled-components";
// import second from 'first'
const NumberSelecter = () => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const [selectnumber, setselectnumber] = useState();
  return (

    <Main>

    <div className="flex">
      {arrayNumber.map((value, i) => (
        <Box
          isSelected={value === selectnumber}
          key={i}
          onClick={() => setselectnumber(value)}
        >
          {value}
        </Box>
      ))}


    </div>
      <p>Select Number</p>
    </Main>
  );
};

export default NumberSelecter;

const Main = styled.div`
.flex{
    display: flex;
gap: 30px;

}
p{
    color: #000;
font-size: 24px;
font-weight: 700;
line-height: 3;
padding-left: 400px;

}

`

const Box = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  
`;
