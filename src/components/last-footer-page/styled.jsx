import styled from "styled-components";

const LastFooterPagePart = styled.div`
    color: #7F4E15;;
    text-align: center;
`
const LastFooterPagePartContext = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 30px;
    font-size: 30px;
    > p {
        margin-top: 8px;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        div {
            img {
                padding: 11px;
                border-right: 2px solid aliceblue;
                /* border-radius: 50px; */
            }
            div {
                display: block;
            }
        }
   }
     a {
        font-family: ArmenianDecorativeU-Italic;
        text-decoration: none;
        cursor: pointer;
        transition: 0.2s;
    }

    a:hover {
        text-decoration: underline;
        opacity: 0.8;
    }
`
export { LastFooterPagePart, LastFooterPagePartContext }