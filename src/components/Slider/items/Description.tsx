import Button from 'components/Button';
import React, { ReactElement } from 'react';
import { getEllipsis, theme } from 'utils';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';
import Popover from 'components/Popover';
import { BsFillImageFill } from 'react-icons/bs';
import { Text as TextComponent } from '../../Text';

interface Props {
    description: string;
    isExpanded?: boolean;
    popoverImage: string;
    onExpandToggle: () => void;
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    white-space: normal;
    padding: 0 8px;
`;

const TextWrapper = styled.div`
    width: 95%;
    position: relative;
    display: inline-block;
`;

const Text = styled(TextComponent)`
    @media screen and (max-width: 600px) {
        font-size: ${(p) => p.theme.font.small};
    }
`;

const ExpandButton = styled(Button)`
    margin-top: 12px;
`;

export default function Description({ isExpanded, description, onExpandToggle, popoverImage }: Props): ReactElement {
    const text = isExpanded ? description : getEllipsis(description);

    return (
        <Container>
            <TextWrapper>
                <Text>
                    <Popover imageURL={popoverImage}>
                        <BsFillImageFill
                            size={18}
                            style={{ display: 'inline-block', marginRight: 4 }}
                            color={theme.colors.accent}
                        />
                    </Popover>
                    {text}
                </Text>
            </TextWrapper>
            <ExpandButton title={!isExpanded ? 'Expand' : 'Collapse'} onClick={onExpandToggle}>
                {!isExpanded ? (
                    <FaChevronDown color={theme.colors.accent} />
                ) : (
                    <FaChevronUp color={theme.colors.accent} />
                )}
            </ExpandButton>
        </Container>
    );
}
