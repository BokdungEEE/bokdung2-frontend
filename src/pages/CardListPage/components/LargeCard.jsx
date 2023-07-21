import PropTypes from 'prop-types';

import { ReactComponent as CourseCard } from "../assets/largecards/course.svg";
import { ReactComponent as HealthCard } from "../assets/largecards/health.svg";
import { ReactComponent as LoveCard } from "../assets/largecards/love.svg";
import { ReactComponent as MoneyCard } from "../assets/largecards/money.svg";
import { ReactComponent as PromotionCard } from "../assets/largecards/promotion.svg";
import { ReactComponent as TestCard } from "../assets/largecards/test.svg";
import { ReactComponent as LuckyCard } from "../assets/largecards/lucky.svg";
import { styled } from 'styled-components';
import { useState } from 'react';

const CardContainer = styled.div`
    width: 270px;
    height: 400px;

    border-radius: 24px;    
    background: var(--black, #32363A);

    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: 400ms ease-in-out;
    transform-style: preserve-3d;

    transform: rotateY(${(props) => props.$rotate ? 180 : 0}deg);
`;

const FlippedCard = styled.div`
    width: 270px;
    height: 400px;

    display: flex;
    flex-direction: column;
    
    gap: 12px;

    border-radius: 24px;
    background: var(--black, #32363A);

    z-index: -10;
`;

const FlipWrapper = styled.div`
    position: absolute;
    backface-visibility: hidden;

    transform: rotateY(${(props) => props.$rotate ? 180 : 0}deg);
`;

const ContentWrapper = styled.div`
    user-select: none; /* Likely future */

    margin: 20px;
    width: 230px;
    height: 360px;

    display: flex;
    flex-direction: column;
    
    justify-content: space-between;

    color: var(--white, #DCE9F5);
    /* PyeongChang/body 2 */
    font-family: PyeongChangPeace;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`;

const AuthorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;


/**
 * 
 * @param {{type: "course"|"health"|"love"|"money"|"promotion"|"test"}} args0 
 * @returns 
 */
const UnflippedCardRender = ({ type }) => {
    if (type == "course") {
        return <CourseCard />;
    } else if (type == "health") {
        return <HealthCard />;
    } else if (type == "love") {
        return <LoveCard />;
    } else if (type == "money") {
        return <MoneyCard />;
    } else if (type == "promotion") {
        return <PromotionCard />;
    } else if (type == "test") {
        return <TestCard />;
    } else if (type == "lucky") {
        return <LuckyCard />;
    }
};

UnflippedCardRender.propTypes = {
    type: PropTypes.oneOf(["course", "health", "love", "money", "promotion", "test", "lucky"]).isRequired
};

/**
 * 
 * @param {{ 
 *      type: "course" | "health" | "love" | "money" | "promotion" | "test" | "lucky", 
 *      flippable: boolean, 
 *      flip: boolean, 
 *      onClick: (flipped: boolean) => void,
 *      text: string,
 *      author: string }} param0 
 * @returns 
 */
export default function LargeCard({ type, flippable = true, flip = true, onClick, text, author }) {
    const [flipped, setFlipped] = useState(true);

    /**
     * 
     * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e 
     */
    const onCardClicked = (e) => {
        e.stopPropagation();

        if (flippable) {
            setFlipped(prevState => {
                onClick(!prevState);
                return !prevState;
            });
        } else {
            onClick(flipped);
        }
    };

    return (
        <CardContainer onClick={(e) => onCardClicked(e)} $rotate={
            flippable ? flipped : flip}>
            <FlipWrapper $rotate={true}>
                <UnflippedCardRender type={type} />
            </FlipWrapper>
            <FlipWrapper $rotate={false}>
                <FlippedCard>
                    <ContentWrapper>
                        {text}

                        <AuthorWrapper>
                            {author}
                        </AuthorWrapper>
                    </ContentWrapper>
                </FlippedCard>
            </FlipWrapper>
        </CardContainer>
    )
}

LargeCard.propTypes = {
    type: PropTypes.oneOf(["course", "health", "love", "money", "promotion", "test"]).isRequired,
    flippable: PropTypes.bool,
    flip: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string,
    author: PropTypes.string
};