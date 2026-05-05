import { PhotoDiv, ThirdPagePart, ThirdPagePartCalendar } from "./styled"
import { Container } from "../../GlobalStyle"



export const ThirdPage = () => {
    return (
        <ThirdPagePart className="relative">
            <Container className="none">
                <ThirdPagePartCalendar data-aos="fade-in" className="mt-[40px] w-full">
                    {[...Array(35)].map((_, i) =>
                        i > -1 && i <= 29 ? <div className={i + 1 == 8 ? "special" : ""}>{i + 1}</div> : <div></div>
                    )}
                </ThirdPagePartCalendar>
            </Container>
        </ThirdPagePart>
    )
}