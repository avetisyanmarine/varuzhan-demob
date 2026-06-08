import { Container } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <h4>Վարուժանի <br /> Զորացրման Քեֆը</h4>
      <Container className="none">
       
        <div className="info">
          <h3 className="text-[22px] border-t-1 border-b-1 border-t-black border-b-black">
            Հունիս
          </h3>
          <h2 className="font-[englishFont] font-[500]">26</h2>
          <h3 className="text-[22px] border-t-1 border-b-1 border-t-black border-b-black">
            Ուրբաթ
          </h3>
        </div>
      </Container>
    </FirstPagePart>
  );
};
