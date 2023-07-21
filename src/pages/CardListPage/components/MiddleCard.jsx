import PropTypes from "prop-types"

import { styled } from "styled-components"
import { useState } from "react";

import { ReactComponent as CourseCard } from "../assets/middlecards/course.svg";
import { ReactComponent as HealthCard } from "../assets/middlecards/health.svg";
import { ReactComponent as LoveCard } from "../assets/middlecards/love.svg";
import { ReactComponent as MoneyCard } from "../assets/middlecards/money.svg";
import { ReactComponent as PromotionCard } from "../assets/middlecards/promotion.svg";
import { ReactComponent as TestCard } from "../assets/middlecards/test.svg";
import { ReactComponent as LuckyCard } from "../assets/middlecards/lucky.svg";

const CardContainer = styled.div`
    width: 220px;
    height: 330px;

    border-radius: 24px;
    background: var(--black, #32363A);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    
    transition: 400ms ease-in-out;
    transform-style: preserve-3d;

    transform: rotateY(${(prop) => prop.$rotate ? 180 : 0}deg);
`;

const FlippedCard = styled.div`
    width: 220px;
    height: 330px;

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

    transform: rotateY(${(prop) => prop.$rotate ? 180 : 0}deg);
`;

const ContentWrapper = styled.div`
    user-select: none; /* Likely future */

    margin: 20px;
    width: 180px;
    height: 320px;

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
 * @param {{ type: "course" | "health" | "love" | "money" | "promotion" | "test" | "lucky", flippable: boolean, flip: boolean, text: string, author: string }} param0 
 * @returns 
 */
export default function MiddleCard({ type, flippable = true, flip = true, text, author }) {
    const [flipped, setFlipped] = useState(true);

    const onCardClicked = () => {
        if (flippable) {
            setFlipped(prevState => !prevState);
        }
    };

    return (
        <CardContainer onClick={() => onCardClicked()} $rotate={flippable ? flipped : flip}>
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

MiddleCard.propTypes = {
    type: PropTypes.oneOf(["course", "health", "love", "money", "promotion", "test"]).isRequired,
    flippable: PropTypes.bool,
    flip: PropTypes.bool,
    text: PropTypes.string,
    author: PropTypes.string
};