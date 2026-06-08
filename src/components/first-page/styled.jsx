import styled from "styled-components";

const FirstPagePart = styled.div`
  width: 100vw;
  height: 100dvh;
  transition: 0.5s;
  padding-top: 30px;
  filter: opacity(0.5);
  /* overflow: hidden; */
  background: url("/mainPhoto.jpg") no-repeat center center/cover;
  color: #030318;
  h4 {
    font-size: 16px;
    text-align: center;
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    h3 {
      padding: 10px 0;
    }
    h2 {
      font-family: englishFont;
      font-size: 56px;
    }
  }
`;
const FirstPagePartContext = styled.div`
  margin-top: 20vh;
  /* margin-right: 5vw; */
  width: 100%;
  /* h1 {
    font-family: englishFont;
    line-height: 70px;
    width: 100%;
    color: #030318;
    /* position: relative; */
    /* top: 26px; */
  /* } */
  .uniqueDiv {
    position: relative;
    text-align: center;
    .bigNumber {
      position: absolute;
      width: 100%;
      top: 30px;
      font-size: 280px;
      color: #030318;
      /* margin-left: 40px; */
      opacity: 0.25;
    }
  }
`;

export { FirstPagePart, FirstPagePartContext };
