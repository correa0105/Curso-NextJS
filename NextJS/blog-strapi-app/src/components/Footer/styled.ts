import styled, { css } from 'styled-components';

export const Container = styled.footer`
    ${({ theme }) => css`
        margin: ${theme.spacings.medium};
        font-size: ${theme.spacings.small};
        text-align: center;

        a {
        color: ${({ theme }) => theme.colors.gray}
    }
    `}
`;
