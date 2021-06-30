import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRandomArrayItem, getTitleAndSubtitle } from 'utils';
import Description from './Description';
import { Text } from '../../Text';

interface Props {
    title: string;
    description: string;
    mainImageURL: string;
    images: string[];
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: inline-block;
`;

const ImageWrapper = styled.div`
    height: 65%;
    padding: 22px 0;
`;

const Image = styled.div<Pick<Props, 'mainImageURL'>>`
    width: 100%;
    height: 100%;
    max-height: 100%;
    background: url(${(p) => p.mainImageURL}) no-repeat center;
    background-size: contain;
`;

const Content = styled.div`
    height: 35%;
    padding: 8px 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
`;

const TitleText = styled(Text)`
    text-transform: uppercase;
    text-align: center;
`;

const Title = styled(TitleText)`
    font-size: ${(p) => p.theme.font.large};
    color: ${(p) => p.theme.colors.main};
    letter-spacing: 1px;
`;

const Subtitle = styled(TitleText)`
    font-size: ${(p) => p.theme.font.subtitle};
    color: ${(p) => p.theme.colors.accent};
`;

const Slide = ({ title: titleProp, description, mainImageURL, images }: Props) => {
    const [descExpanded, setDescExpanded] = useState(false);
    const [popoverImage, setPopoverImage] = useState<string>('');
    const { title, subtitle } = getTitleAndSubtitle(titleProp);

    useEffect(() => {
        if (!popoverImage) {
            const img = getRandomArrayItem(images, mainImageURL);
            setPopoverImage(img);
        }
    }, []);

    const handleExpand = () => {
        setDescExpanded((expanded) => !expanded);
    };

    return (
        <Container>
            <ImageWrapper>
                <Image mainImageURL={mainImageURL} />
            </ImageWrapper>
            <Content>
                <TitleWrapper>
                    <Title>{title}</Title>
                    {subtitle && <Subtitle>{subtitle}</Subtitle>}
                </TitleWrapper>
                <Description
                    description={description}
                    onExpandToggle={handleExpand}
                    isExpanded={descExpanded}
                    popoverImage={popoverImage}
                />
            </Content>
        </Container>
    );
};

export default Slide;
