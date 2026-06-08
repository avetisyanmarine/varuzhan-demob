import {
  GridDiv,
  SecondPagePart,
  SecondPagePartContext,
  RSVPSection,
  RSVPButtons,
  RSVPButton,
  SendButton,
  RSVPMessage,
  RSVPLabel,
} from "./styled";
import { Container, Flexible } from "../../GlobalStyle";
import { useEffect, useState } from "react";
import { ThirdPage } from "../third-page";
import image1 from "/site-images/image1.jpg";
import image3 from "/site-images/image3.jpg";
import number from "../../assets/image/number.png";
import lant from "../../assets/image/lant.png";

export const SecondPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const date = new Date(2026, 5, 26, 0, 0, 0);

  const handleClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 60;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const formatNumber = (num) => String(num).padStart(2, "0");

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = date - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (value) => {
    setSelectedResponse(value);
    setSubmitted(false);
  };

  const handleSend = async () => {
    if (!selectedResponse || !guestName.trim()) {
      alert("Խնդրում ենք լրացնել Ձեր անունը և ընտրել տարբերակը:");
      return;
    }
    if (selectedResponse === "yes" && !guestCount.trim()) {
      alert("Խնդրում ենք նշել հյուրերի քանակը:");
      return;
    }

    setLoading(true);
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxpkRQThiXQOCx_DWL83lHY3yWXbH-pWoyJp7Z0SJ_JsfAd3YORHP61UAhL_IbK3-3ftg/exec"; // Փոխարինիր սա քո իրական URL-ով

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: guestName,
          response: selectedResponse === "yes" ? "Այո" : "Ոչ",
          guests: guestCount,
        }),
      });

      setSubmitted(true);
      setGuestName(""); // Մաքրել անունը ուղարկելուց հետո
      setGuestCount(""); // Մաքրել հյուրերի քանակը
    } catch (error) {
      console.error("Error!", error);
      alert("Սխալ տեղի ունեցավ: Փորձեք նորից:");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SecondPagePart>
      <Container>
        <a
          onClick={handleClick}
          className="cursor-pointer animate-[moveUpDown_1s_ease-in-out_infinite]"
        >
          <svg width="49" height="31" viewBox="0 0 49 31" fill="none">
            <path
              d="M47.3118 1.38342C48.7273 3.05932 48.7273 5.7768 47.3118 7.4527L29.5775 28.428C26.7457 31.7772 22.1572 31.7758 19.3268 28.425L1.59932 7.43725C0.183689 5.76135 0.183689 3.04387 1.59932 1.36797C3.015 -0.308352 5.3102 -0.308352 6.72587 1.36797L21.8987 19.3312C23.3146 21.0071 25.6096 21.0071 27.0252 19.3312L42.1853 1.38342C43.6009 -0.292473 45.8962 -0.292473 47.3118 1.38342Z"
              fill="#fff"
            />
          </svg>
        </a>

        <SecondPagePartContext>
          <div id="about" className="text-center">
            {/* <h3 className="text-[96px] font-[englishFont]" data-aos="zoom-in">
              20
            </h3> */}
            <img
              src={number}
              alt="26"
              className="w-[150px]"
              style={{ margin: "0 auto" }}
              data-aos="zoom-in"
            />
            <div>
              <h2 data-aos="zoom-in">Տունդարձի Հրավեր</h2>{" "}
              <GridDiv data-aos="fade-in">
                <Flexible>
                  <h2>{formatNumber(timeLeft.days)}</h2>
                  <p>Օր</p>
                </Flexible>
                <Flexible>
                  <h2>{formatNumber(timeLeft.hours)}</h2>
                  <p>Ժամ</p>
                </Flexible>
                <Flexible>
                  <h2>{formatNumber(timeLeft.minutes)}</h2>
                  <p>Րոպե</p>
                </Flexible>
                <Flexible className="uniqueBorder">
                  <h2>{formatNumber(timeLeft.seconds)}</h2>
                  <p>Վայրկյան</p>
                </Flexible>
              </GridDiv>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            {/* Նկարը */}
            <img
              loading="lazy"
              src={lant}
              alt="lant"
              className="w-full h-auto" // Ավելացրեք չափսեր, եթե հարկավոր է
            />

            {/* Տեքստը նկարի վրա */}
            <h2
              className="absolute top-5 text-[#fff] text-center font-bold"
              style={{
                fontSize: "22px",
                textShadow: "1px 5px 2px rgba(0, 0, 0, 0.948)",
              }}
              data-aos="zoom-in"
            >
              Սիրելի հյուրեր
            </h2>
          </div>
          <h5 className="text-[16px] font-[500]" data-aos="zoom-in">
            Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր զինվոր Վարուժանի զորացրման
            տոնական երեկոյին։
            <b className="text-[17px]" style={{ letterSpacing: "3px" }}>
              <br />
              Միասին դիմավորենք մեր հերոսին <br />և նշենք նրա բարի վերադարձը։{" "}
              <br />
            </b>
            Ձեր ներկայությունը կլցնի երեկոն ջերմությամբ և ուրախությամբ։ Սիրով
            սպասում ենք Ձեզ միասին կիսելու այս հիշարժան պահը։
          </h5>
          <hr className="w-1/3 my-4" />
          <h2 data-aos="zoom-in" className="w-full">
            Պահպանիր Օրը
          </h2>
          <ThirdPage />
          <img src={image3} alt="" className="rounded-[100px]" />
        </SecondPagePartContext>

        <RSVPSection>
          <h2 data-aos="fade-in" className="w-full">
            RSVP
          </h2>
          <RSVPLabel>Կմիանա՞ք տոնին, թե ոչ։</RSVPLabel>

          {/* Անվան դաշտ */}
          <input
            type="text"
            placeholder="Ձեր Անունը"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            style={{
              padding: "10px",
              margin: "15px 0",
              border: "none",
              borderBottom: "2px solid #fff",
              background: "transparent",
              textAlign: "center",
              fontSize: "18px",
              outline: "none",
              width: "100%",
              maxWidth: "300px",
            }}
          />

          {/* Հյուրերի քանակի դաշտ */}
          {selectedResponse === "yes" && (
            <input
              type="number"
              placeholder="Հյուրերի քանակը"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              style={{
                padding: "10px",
                margin: "15px 0",
                border: "none",
                borderBottom: "2px solid #fff",
                background: "transparent",
                textAlign: "center",
                fontSize: "18px",
                outline: "none",
                width: "100%",
                maxWidth: "300px",
              }}
            />
          )}

          <RSVPButtons>
            <RSVPButton
              type="button"
              $active={selectedResponse === "yes"}
              onClick={() => handleSelect("yes")}
            >
              Այո
            </RSVPButton>
            <RSVPButton
              type="button"
              $active={selectedResponse === "no"}
              onClick={() => handleSelect("no")}
            >
              Ոչ
            </RSVPButton>
          </RSVPButtons>

          <SendButton
            type="button"
            disabled={!selectedResponse || !guestName || loading}
            onClick={handleSend}
          >
            {loading ? "Ուղարկվում է..." : "Ուղարկել"}
          </SendButton>

          {submitted && (
            <RSVPMessage>
              Ձեր պատասխանը հաջողությամբ գրանցվեց։ Սպասում ենք Ձեզ:
            </RSVPMessage>
          )}
        </RSVPSection>

        <img
          src={image1}
          alt="B-day"
          className="rounded-[100px] my-10"
          data-aos="fade-in"
        />
      </Container>
    </SecondPagePart>
  );
};
