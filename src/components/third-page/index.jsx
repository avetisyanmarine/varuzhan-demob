import { PhotoDiv, ThirdPagePart, ThirdPagePartCalendar } from "./styled"
import { Container } from "../../GlobalStyle"



export const ThirdPage = () => {
    return (
        <ThirdPagePart className="relative">
            <Container className="none">
                <ThirdPagePartCalendar data-aos="fade-in" className="mt-[40px] w-full">
                    {[...Array(35)].map((_, i) =>
                        i > 3 && i <= 32 ? <div className={i - 3 == 22 ? "special" : ""}>{i - 3}</div> : <div></div>
                    )}
                </ThirdPagePartCalendar>
            </Container>
        </ThirdPagePart>
    )
}