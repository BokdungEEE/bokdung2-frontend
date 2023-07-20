import PropTypes from "prop-types"

import { styled } from "styled-components"
import { useState } from "react";

import { ReactComponent as CourseCard } from "../assets/middlecards/course.svg";
import { ReactComponent as HealthCard } from "../assets/middlecards/health.svg";
import { ReactComponent as LoveCard } from "../assets/middlecards/love.svg";
import { ReactComponent as MoneyCard } from "../assets/middlecards/money.svg";
import { ReactComponent as PromotionCard } from "../assets/middlecards/promotion.svg";
import { ReactComponent as TestCard } from "../assets/middlecards/test.svg";

const CardContainer = styled.div`
    width: 270px;
    height: 400px;

    border-radius: 24px;
    background: var(--black, #32363A);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    
    transition: 400ms ease-in-out;
    transform-style: preserve-3d;

    transform: rotateY(${(props) => props.rotate ? 180 : 0}deg);
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

    transform: rotateY(${(props) => props.rotate ? 180 : 0}deg);
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
    }
};

UnflippedCardRender.propTypes = {
    type: PropTypes.oneOf(["course", "health", "love", "money", "promotion", "test"]).isRequired
};

/**
 * 
 * @param {{ type: "course" | "health" | "love" | "money" | "promotion" | "test" }} param0 
 * @returns 
 */
export default function MiddleCard({ type }) {
    const [flipped, setFlipped] = useState(false);

    const [cardText,] = useState("친구야 ㅎㅇ");
    const [cardAuthor,] = useState("김땡땡")

    const onCardClicked = () => {
        setFlipped(prevState => !prevState);
    };

    return (
        <CardContainer onClick={() => onCardClicked()} rotate={flipped}>
            <FlipWrapper rotate={true}>
                <UnflippedCardRender type={type} />
            </FlipWrapper>
            <FlipWrapper rotate={false}>
                <FlippedCard>
                    <ContentWrapper>
                        {cardText}

                        <AuthorWrapper>
                            {cardAuthor}
                        </AuthorWrapper>
                    </ContentWrapper>
                </FlippedCard>
            </FlipWrapper>
        </CardContainer>
    )
}

MiddleCard.propTypes = {
    type: PropTypes.oneOf(["course", "health", "love", "money", "promotion", "test"]).isRequired
};