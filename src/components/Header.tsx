import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    padding: 5vmin 1rem;
    width: 100%;
    background: ${(p) => p.theme.colors.main};
    color: ${(p) => p.theme.colors.white};
    text-align: center;
    text-transform: uppercase;
    font-size: ${(p) => p.theme.font.large};
    font-weight: 700;
    box-shadow: 0px 0px 12px 2px ${(p) => p.theme.colors.lightGrey};
`;
