import { Container } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <h4>Անակնկալ <br /> ծննդյան հրավեր</h4>
      <Container className="none">
        <FirstPagePartContext>
          <div className="text-right uniqueDiv">
            <h1 style={{fontSize: "95px"}}>Yura’s Birthday</h1>
            <h1 className="bigNumber">20</h1>
          </div>
        </FirstPagePartContext>
        <div className="info">
          <h3 className="text-[32px] border-t-1 border-b-1 border-t-black border-b-black">
            Հունիս
          </h3>
          <h2 className="font-[englishFont] font-[500]">8</h2>
          <h3 className="text-[32px] border-t-1 border-b-1 border-t-black border-b-black">
            Երկուշաբթի
          </h3>
        </div>
      </Container>
    </FirstPagePart>
  );
};
