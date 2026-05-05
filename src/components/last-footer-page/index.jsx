import { Container, Flexible } from "../../GlobalStyle";
import { LastFooterPagePart, LastFooterPagePartContext } from "./styled";
import PhoneSvg from "../../assets/vectors/Phone.svg";
import Webinvite from "../../assets/webinvite.png";

export const LastFooterPage = () => {
  return (
    <LastFooterPagePart className="bg-[white] rounded-tl-[100px] pt-[20px]">
      <Container>
        <LastFooterPagePartContext>
          <p>Հրավիրատոմսը պատրաստվել է</p>
          <Flexible className="items-center justify-center gap-2 mt-4">
            <a
              href="https://www.instagram.com/webinvite.am"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Webinvite} width={150} alt="Webinvite" />
            </a>
            կողմից
          </Flexible>
          <div className="mb-8">
            <a
              href="tel:+37477506269"
              className="flex items-center mt-[20px] justify-center gap-2 text-xl font-semibold transition-colors"
            >
              <svg

                width="16"

                height="17"

                viewBox="0 0 16 17"

                fill="none"

                xmlns="http://www.w3.org/2000/svg"

              >

                <g clip-path="url(#clip0_19_259)">

                  <path

                    d="M10.0333 3.54159C10.6845 3.67657 11.2829 4.01493 11.7521 4.51337C12.2212 5.01181 12.5396 5.64765 12.6667 6.3395M10.0333 0.708252C11.3862 0.867936 12.6477 1.51163 13.6108 2.53363C14.5739 3.55564 15.1813 4.89522 15.3333 6.33242M14.6667 11.9849V14.1099C14.6674 14.3072 14.6294 14.5025 14.555 14.6832C14.4806 14.864 14.3715 15.0262 14.2347 15.1596C14.0979 15.2929 13.9364 15.3945 13.7605 15.4577C13.5846 15.5209 13.3983 15.5443 13.2133 15.5266C11.1619 15.2897 9.19134 14.5449 7.46001 13.352C5.84923 12.2645 4.48356 10.8135 3.46001 9.102C2.33333 7.2541 1.63217 5.15021 1.41334 2.96075C1.39668 2.76487 1.41859 2.56746 1.47767 2.38107C1.53676 2.19468 1.63172 2.02341 1.75652 1.87815C1.88131 1.73289 2.03321 1.61684 2.20253 1.53737C2.37186 1.45791 2.5549 1.41677 2.74001 1.41659H4.74001C5.06354 1.4132 5.3772 1.53493 5.62251 1.75909C5.86783 1.98324 6.02806 2.29453 6.07334 2.63492C6.15775 3.31497 6.31431 3.98268 6.54001 4.62534C6.6297 4.87886 6.64911 5.1544 6.59594 5.41929C6.54277 5.68418 6.41925 5.92733 6.24001 6.11992L5.39334 7.0195C6.34238 8.79285 7.72431 10.2611 9.39334 11.2695L10.24 10.3699C10.4213 10.1795 10.6501 10.0482 10.8994 9.99173C11.1487 9.93524 11.4081 9.95587 11.6467 10.0512C12.2515 10.291 12.88 10.4573 13.52 10.547C13.8439 10.5955 14.1396 10.7689 14.351 11.034C14.5624 11.2991 14.6748 11.6375 14.6667 11.9849Z"

                    stroke="#030318"

                    stroke-width="2"

                    stroke-linecap="round"

                    stroke-linejoin="round"

                  />

                </g>

              </svg>
              077 50 62 69
            </a>
          </div>
        </LastFooterPagePartContext>
      </Container>
    </LastFooterPagePart>
  );
};
