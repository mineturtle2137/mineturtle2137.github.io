import styled from 'styled-components';

interface Props {
    scaled?: boolean;
}

export default styled.button<Props>`
    text-decoration: none;
    border: none;
    transition: transform 0.5s;
    background-color: transparent;
    border-radius: 4px;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
        transform: ${(p) => p.scaled && 'scale(1.12)'};
    }
`;
