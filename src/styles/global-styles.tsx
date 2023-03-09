import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface ThemeInterface {}

export const GlobalStyle = createGlobalStyle<ThemeInterface>`
    @font-face { font-family: 'ghanachoco'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ghanachoco.woff') format('woff'); font-weight: normal; font-style: normal; }
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'NanumSquare', sans-serif;
        transition: color,background 0.25s ease-in;        
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
`;
