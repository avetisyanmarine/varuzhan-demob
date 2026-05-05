import styled from "styled-components";

const FirstPagePart = styled.div`
  width: 100vw;
  height: 100dvh;
  transition: 0.5s;
  /* overflow: hidden; */
  color: #030318;
  h4 {
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 140px auto 0 auto;
    h3 {
      padding-bottom: 10px;
    }
    h2 {
      font-family: englishFont;
      font-size: 72px;
    }
  }
`;
const FirstPagePartContext = styled.div`
  margin-top: 20vh;
  /* margin-right: 5vw; */
  width: 100%;
  h1 {
    font-family: englishFont;
    line-height: 70px;
    width: 100%;
    color: #030318;
    /* position: relative; */
    /* top: 26px; */
  }
  .uniqueDiv {
    position: relative;
    text-align: center;
    .bigNumber {
      position: absolute;
      width: 100%;
      top: 30px;
      font-size: 340px;
      color: #030318;
      /* margin-left: 40px; */
      opacity: 0.25;
    }
  }
`;

export { FirstPagePart, FirstPagePartContext };
