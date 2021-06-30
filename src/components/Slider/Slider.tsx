import ArrowButton from 'components/ArrowButton';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AUTOPLAY_DURATION, Direction } from 'utils';
import { SlideType } from 'utils/types';
import Slide from './items/Slide';

interface Props {
    slides: SlideType[];
    autoplayInSeconds?: number;
}

const Wrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    min-width: 300px;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    max-width: 92%;
    width: 92%;
    height: 100%;
    overflow-x: hidden;
    box-shadow: 0px 0px 12px 4px ${(p) => p.theme.colors.lightGrey};
    border-radius: ${(p) => p.theme.cardBorderRadius};
`;

const Carousel = styled.div<{ translation: number }>`
    width: 100%;
    height: 100%;
    white-space: nowrap;
    transform: translateX(-${(p) => p.translation * 100}%);
    transition: ease-in-out 0.5s;
`;

export function Slider({ slides, autoplayInSeconds = AUTOPLAY_DURATION }: Props): ReactElement {
    const [slideIndex, setSlideIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout>();

    const clearTimeoutRef = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        timeoutRef.current = setTimeout(handleNextSlide, autoplayInSeconds * 1000);

        return () => clearTimeoutRef();
    }, [slideIndex]);

    const handleNextSlide = () => {
        clearTimeoutRef();

        setSlideIndex((idx) => {
            if (idx === slides.length - 1) {
                return 0;
            }

            return idx + 1;
        });
    };

    const handlePrevSlide = () => {
        clearTimeoutRef();

        setSlideIndex((idx) => {
            return idx === 0 ? slides.length - 1 : idx - 1;
        });
    };

    return (
        <Wrapper>
            <ArrowButton direction={Direction.LEFT} onClick={handlePrevSlide} />
            <Container>
                <Carousel translation={slideIndex}>
                    {slides.map((slide) => {
                        const { main_image, name, description, images, id } = slide;

                        return (
                            <Slide
                                key={id}
                                mainImageURL={main_image}
                                title={name}
                                description={description}
                                images={images}
                            />
                        );
                    })}
                </Carousel>
            </Container>
            <ArrowButton direction={Direction.RIGHT} onClick={handleNextSlide} />
        </Wrapper>
    );
}
