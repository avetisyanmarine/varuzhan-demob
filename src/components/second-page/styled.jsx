import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const SecondPagePart = styled.div`
  /* display: flex;
justify-content: center;
align-items: center;
flex-direction: column; */
color: #030318;
  div {
    text-align: center;
  }
  a {
    display: block;
  }
  svg {
    margin: 0 auto 45px auto;
  }
`;
const SecondPagePartContext = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 40px 20px 25px 20px;
  background-color: #fff;
  border-radius: 100px;
  img {
    object-fit: cover;
  }
  svg {
    cursor: pointer;
    margin: 20px 0;
  }
  h3 {
    line-height: 70px;
  }
  @keyframes moveUpDown {
    0%, 
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const GridDiv = styled(Flexible)`
  div {
    flex-direction: column;
    text-align: center;
    padding: 0 20px 16px 20px;
    font-weight: 500;

    p {
      font-weight: 500;
      font-size: 22px;
      line-height: 12px;
    }
    /* border-right: 1px solid black; */
  .uniqueBorder {
    border: 0;
  }
  }
`;

const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
`;

const Circle = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 50%;
`;

const RSVPSection = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h2 {
    font-size: 50px;
    margin-top: 50px;
    font-family: englishFont;
  }
`;

const RSVPButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 420px;
`;

const RSVPButton = styled.button`
  min-width: 120px;
  padding: 0 28px 17px 14px;
  border-radius: 100px;
  border: 2px solid #030318;
  background: ${({ $active }) => ($active ? "#030318" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#030318")};
  font-size: 30px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #030318;
    color: #fff;
  }
`;

const SendButton = styled.button`
  min-width: 180px;
  padding: 0 28px 17px 14px;
  border-radius: 100px;
  border: none;
  background: #030318;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RSVPMessage = styled.p`
  color: #030318;
  font-size: 22px;
  font-weight: 500;
  margin: 0;
`;

const RSVPLabel = styled.p`
  color: #0e1111;
  font-size: 29px;
  font-weight: 400;
  max-width: 480px;
  margin: 0;
  line-height: 1.5;
`;

export { SecondPagePart, SecondPagePartContext, GridDiv, Circle, CirclesContainer, RSVPSection, RSVPButtons, RSVPButton, SendButton, RSVPMessage, RSVPLabel };
