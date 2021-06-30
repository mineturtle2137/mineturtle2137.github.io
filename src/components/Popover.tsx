import React, { ReactElement, PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

interface Props {
    imageURL: string;
}

type PopoverMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
type PopoverMouseHandler = (e: PopoverMouseEvent) => void;

const PopoverWrapper = styled.div<{
    onMouseEnter: PopoverMouseHandler;
    onMouseLeave: PopoverMouseHandler;
}>`
    position: relative;
    display: inline-block;
    transition: 0.1s;
    &:hover {
        transform: scale(1.1);
    }
`;

const PopoverContainer = styled.div`
    padding: 10px;
    z-index: 5;
    border-radius: ${(p) => p.theme.cardBorderRadius};
    min-height: ${(p) => p.theme.popover.minSize};
    min-width: ${(p) => p.theme.popover.minSize};
    width: ${(p) => p.theme.popover.size};
    height: ${(p) => p.theme.popover.size};
    box-shadow: 0px 0px 12px 4px ${(p) => p.theme.colors.lightGrey};
    background: ${(p) => p.theme.colors.white};
    position: absolute;
    transform: translate(7%, -107%);
    transition: 0.2s;
`;

const PopoverImage = styled.div<Props>`
    width: 100%;
    height: 100%;
    z-index: 6;
    background: url(${(p) => p.imageURL}) no-repeat center;
    background-size: cover;
    background-origin: content-box;
`;

export default function Popover({ imageURL, children }: PropsWithChildren<Props>): ReactElement {
    const [visible, setVisible] = useState(false);

    const togglePopoverVisibility = (e: PopoverMouseEvent) => {
        e.preventDefault();
        setVisible((currentVisible) => !currentVisible);
    };

    return (
        <PopoverWrapper onMouseEnter={togglePopoverVisibility} onMouseLeave={togglePopoverVisibility}>
            {children}
            {visible && (
                <PopoverContainer>
                    <PopoverImage imageURL={imageURL} />
                </PopoverContainer>
            )}
        </PopoverWrapper>
    );
}
