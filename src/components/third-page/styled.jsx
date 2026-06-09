import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const ThirdPagePart = styled.div`
  width: 100%;
  overflow: visible;
  div {
    width: 100%;
  }
  h2 {
    width: fit-content;
    margin: -10px auto 10px auto;
    
  }
`;
const ThirdPagePartContext = styled.div`
  overflow: hidden;
`;
const PhotoDiv = styled.div`
  margin-top: 80px;
`;

const ThirdPagePartCalendar = styled(Flexible)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
  font-family: ArmCoronetU;
  div {
    width: 100%;
    display: flex;
    text-align: center;
    font-weight: 500;
    line-height: 35px;
    justify-content: center;
    font-size: 24px;
    flex: 1 0 calc(100% / 7 - 8px);
  }
.special {
  position: relative;
  width: 100%;
  z-index: 1;
  color: #fff;
  &::after {
    content: "";
    width: 40px;
    height: 40px;
    z-index: -1;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Այստեղ փոփոխված մասերը */
    background-color: #052c17; 
    border-radius: 50%;
  }
}
`;

export { ThirdPagePart, PhotoDiv, ThirdPagePartContext, ThirdPagePartCalendar };
