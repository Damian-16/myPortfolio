import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const btn1 = keyframes`
  0% {
    left: -100%;
  }
  100%, 50% {
    left: 100%;
  }
`;
const btn2 = keyframes`
0% {
  top: -100%;
}
100%, 50% {
  top: 100%;
}
`;
const btn3 = keyframes`
0% {
  right: -100%;
}
100%, 50% {
  right: 100%;
}
`;
const btn4 = keyframes`
0% {
  bottom: -100%;
}

100%, 50% {
  bottom: 100%;
}
`;
export const DynamicButton = styled.button`
  position: relative;
  background: transparent;
  padding: 10px 20px;
  color: #00C9A7;
  font-size: 1rem;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;

  @media (max-width: 558px) {
    font-size: 0.7rem;
    padding:3px;
  }
& > span.dblFirst {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00C9A7);
  animation: 1s linear infinite ${btn1};
}
& > span.dblSecond {
  content: "";
  position: absolute;
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg,transparent, #00C9A7);
  animation: 1s linear .25s infinite ${btn2};
}
& > span.dblThird {
  content: "";
  position: absolute;
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg,transparent, #00C9A7);
  animation: 1s linear .5s infinite ${btn3};
}
& > span.dblFourth {
  content: "";
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg,transparent, #00C9A7);
  animation: 1s linear .75s infinite ${btn4};

}


}

&:hover {
    & > button{
    color: #fff;
    background: #00C9A7;
      color: #fff;
      border-radius: 5px;
      
}


`;
