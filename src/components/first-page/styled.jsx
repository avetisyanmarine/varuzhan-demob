import styled from "styled-components";

const FirstPagePart = styled.div`
  position: relative;
  width: 100vw;
  height: 87dvh;
  width: 100%;
  transition: 0.5s;
  overflow: hidden;
  > img {
    position: absolute;
    height: 80vh;
    top: 8vh;
    left: 0;
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    overflow: visible;
    margin-top: 80px;
    margin-left: 50px;
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
  margin-top: 30vh;
  overflow: visible;
  /* margin-right: 5vw; */
  width: 100%;
  h1 {
    font-family: englishFont;
    line-height: 70px;
    width: 100%;
    /* position: relative; */
    /* top: 26px; */
  }
  .uniqueDiv {
    position: relative;
    .bigNumber {
      position: absolute;
      width: 100%;
      top: 30px;
      text-align: center;
      font-size: 340px;
      color: #7f4e15;
      margin-left: 40px;
      opacity: 0.25;
    }
  }
`;

export { FirstPagePart, FirstPagePartContext };
