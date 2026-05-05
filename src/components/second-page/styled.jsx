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
    margin: 30px auto 45px auto;
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
    line-height: 48px;
    margin-bottom: 30px;
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
    padding: 16px;
    font-weight: 500;

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
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
  color: #fff;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h2 {
    font-size: 40px;
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
  padding: 14px;
  border-radius: 100px;
  border: 2px solid #fff;
  background: ${({ $active }) => ($active ? "#ffffff76" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#fff")};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ffffff76;
    color: #fff;
  }
`;

const SendButton = styled.button`
  min-width: 180px;
  padding: 14px;
  border-radius: 100px;
  border: none;
  background: #ffffff76;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RSVPMessage = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

const RSVPLabel = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  max-width: 480px;
  margin: 0;
  line-height: 1.5;
`;

export { SecondPagePart, SecondPagePartContext, GridDiv, Circle, CirclesContainer, RSVPSection, RSVPButtons, RSVPButton, SendButton, RSVPMessage, RSVPLabel };
