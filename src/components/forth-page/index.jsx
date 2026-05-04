import { Container } from "../../GlobalStyle";
import Restoran from "../../assets/image/restoran.webp";
import Image2 from "/site-images/image2.jpg";
import { ForthPagePart, ForthPagePartContextLast } from "./styled";
export const ForthPage = () => {
  return (
    <ForthPagePart className="relative overflow-hidden">
      <Container>
        <div className="bg-[#fff] rounded-[180px] white-block">
          <h2 className="text-[48px] font-[500]" data-aos="fade-in">
            Ռեստորան
          </h2>
          <h3 data-aos="fade-in" className="text-[32px] text-[var(--dark-color)]">
            FOM <br /> Ռեստորանային Համալիր
          </h3>
          <h1 data-aos="fade-in">19:00</h1>
          <div className="line h-[110px] bg-[var(--black)]"></div>
            <img src={Restoran} alt="Restoran" className="rounded-[170px]" />
          <a href="https://maps.app.goo.gl/cF9PNaTeTbhPmAox5" className="text-[var(--dark-color)] text-[30px] underline">
            Քարտեզ
          </a>
          <img src={Image2} data-aos="fade-in" alt="Image2" className="rounded-[170px]" style={{marginTop: "40px"}} />
        </div>
      <ForthPagePartContextLast>
        <h2 data-aos="fade-in" className="text-[32px] text-[var(--dark-color)]" style={{marginTop: "20px"}}>
          Եկեք միասին կիսենք <br />
          ուրախությունն ու ժպիտները
        </h2>
      </ForthPagePartContextLast>
      </Container>
    </ForthPagePart>
  );
};
