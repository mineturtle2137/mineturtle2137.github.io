import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Direction } from 'utils';
import Button from './Button';

interface Props {
    direction: typeof Direction.RIGHT | typeof Direction.LEFT;
    onClick: () => void;
    disabled?: boolean;
}

type StyledComponentProps = Pick<Props, 'direction'>;

const Arrow = styled(Button)<StyledComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: ${(p) => p.theme.arrow.size};
    width: ${(p) => p.theme.arrow.size};
    background: ${(p) => (p.disabled ? p.theme.colors.disabled : p.theme.colors.white)};
    border-radius: ${(p) => p.theme.arrow.borderRadius};
    right: ${(p) => p.direction === Direction.RIGHT && p.theme.arrow.shift};
    left: ${(p) => p.direction !== Direction.RIGHT && p.theme.arrow.shift};
    box-shadow: 0px 0px 3px 1px ${(p) => p.theme.colors.util};
    z-index: 10;
    svg {
        margin-left: ${(p) => (p.direction === Direction.RIGHT ? '' : '-') + p.theme.arrow.marginShift};
        color: ${(p) => p.theme.colors.util};
    }
`;

function ArrowButton({ direction = Direction.RIGHT, onClick, disabled }: Props): ReactElement {
    return (
        <Arrow scaled onClick={onClick} direction={direction} disabled={disabled}>
            {direction === Direction.RIGHT ? <FaChevronRight /> : <FaChevronLeft />}
        </Arrow>
    );
}

export default ArrowButton;
