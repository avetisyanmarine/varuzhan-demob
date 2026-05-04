import { Container } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";
import MainPhoto from "../../assets/image/mainPhoto.png";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container className="none">
        <FirstPagePartContext>
          <div className="text-right uniqueDiv">
            <h1>Mariam’s Birthday</h1>
            <h1 className="bigNumber">35</h1>
          </div>
        </FirstPagePartContext>
        <div className="info">
          <h3 className="text-[32px] border-t-1 border-b-1 border-t-black border-b-black">
            Մայիս
          </h3>
          <h2 className="font-[englishFont] font-[500]">22</h2>
          <h3 className="text-[32px] border-t-1 border-b-1 border-t-black border-b-black">
            Ուրբաթ
          </h3>
        </div>
      </Container>
    </FirstPagePart>
  );
};
