import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: "Inter", sans-serif;
        background: cyan;
        display: flex;
        justify-content: center;
    }

    body h1 {
        margin-top: 4rem;
    }
`;
