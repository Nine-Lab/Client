import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    @font-face { font-family: 'ghanachoco'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ghanachoco.woff') format('woff'); font-weight: normal; font-style: normal; }
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'NanumSquare', sans-serif;
        transition: color,background 0.25s ease-in;        
        overflow-y:hidden;
        /* background: #2980b9; */
        background: -webkit-linear-gradient(to top, #ffffff, #6dd5fa, #2980b9) !important;
        background: linear-gradient(to top, #ffffff, #6dd5fa, #2980b9)!important;
    }

    html,body {
        height: 100%;        

    }
    button {
        background: none;
        cursor: pointer;
        border: none;
        outline: none;
        transition: color,background 0.25s ease-in;
    }
    ol, ul, li {
        list-style: none;
    }
    a {
        display: block;
        text-decoration: none;
        cursor: pointer;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .header { 
        color: white !important;
        a {
            color: #fff !important;
        }
        button {
            color: #fff !important;

        }
    }

    /*  캐러셀 styles 많아지면 분리 예정 */
    .slick-dots{
        bottom:0;
    }      
`;
