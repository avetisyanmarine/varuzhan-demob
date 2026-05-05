import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

export const MusicPagePart = styled(Flexible)`
    position: fixed;
    z-index: 10;
    right: 0;
    top: 65vh;
    width: 183px;
    height: 60px;
    background: #3d3a3a;
    opacity: .8;
    border-radius: 15px;
    color: aliceblue;
    gap: 10px;
    font-family: 'Segoe Script', cursive;
    div {
        text-align: center;
        h4, p {
            font-weight: 100;
        }
        &:nth-child(2) {
            display: flex;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid aliceblue;
            background: #2e2c2c;
        }
        p {
            font-size: 13px;
        }
    }
`