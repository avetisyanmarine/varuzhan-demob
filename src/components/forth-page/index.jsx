import { Container } from "../../GlobalStyle";
import Restoran from "../../assets/image/restoran.jpg";
import { ForthPagePart, ForthPagePartContextLast } from "./styled";
export const ForthPage = () => {
  return (
    <ForthPagePart className="relative overflow-hidden">
      <Container>
        <div className="bg-[#fff] rounded-[100px] white-block">
          <h2 className="text-[48px] font-[500]" data-aos="fade-in">
            Ռեստորան
          </h2>
          <h3 data-aos="fade-in" className="text-[40px] text-[#030318]">
            Adana Aqua սրահ
          </h3>
          <h1 data-aos="fade-in">17:30</h1>
          <div className="line h-[110px] bg-[var(--black)]"></div>
            <img src={Restoran} alt="Restoran" className="rounded-[100px]" />
          <a href="https://maps.app.goo.gl/Yh7G4J7LDG7XxtXJ8" className="text-[#030318] text-[30px] underline">
            Քարտեզ
          </a>
        </div>
      <ForthPagePartContextLast>
        <h2 data-aos="fade-in" className="text-[32px] text-[#030318]" style={{marginTop: "20px"}}>
          Եկեք միասին կիսենք <br />
          ուրախությունն ու ժպիտները
        </h2>
      </ForthPagePartContextLast>
      </Container>
    </ForthPagePart>
  );
};
