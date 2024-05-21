import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: none;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        font-family: "Inter", sans-serif;
        font-size: ${({ theme }) =>
          theme.font.sizes.medium};
    }

    a {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        transition: opacity 300ms ease-in-out;

        &:hover {
            opacity: .6;
        }
    }
`;
