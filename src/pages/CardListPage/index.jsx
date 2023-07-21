import MiddleCard from "./components/MiddleCard";
import LargeCard from "./components/LargeCard";
import SmallCard from "./components/SmallCard";
import CardGrid from "./components/CardGrid";
import Header from "./components/Header";
import Card from "./components/Card";

import { ReactComponent as FlipIcon } from "./assets/flip.svg";
import { useShowTypeState } from "./states/showTypeState";
import { useState } from "react";
import { styled } from "styled-components";
import LargeButton from "./components/LargeButton";

const BubbleWrapper = styled.div`
    position: absolute;

    top: 115px;
    width: 100vw;

    display: flex;

    flex-direction: row;
    justify-content: center;
`

const BackgroundBubble = styled.div`
    width: 298px;
    height: 298px;
    flex-shrink: 0;

    border-radius: 298px;
    background: rgba(220, 233, 245, 0.04);
    box-shadow: 0px 0px 36px 0px #DCE9F5 inset;

    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 68px;
    margin-top: 38px;
`

const DescriptionWrapper = styled.div`
    user-select: none; /* Likely future */
    
    margin-top: 21px;

    color: var(--white, #DCE9F5);
    text-align: center;

    font-family: PyeongChang;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    
`;

const RoundWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
        justify-content: center;

    position: absolute;
    overflow: hidden;

    top: 299px;
    z-index: -1;
`

const BlueRounded = styled.div`

    width: 630px;
    height: 630px;
    flex-shrink: 0;
    
    border-radius: 630px;
    background: var(--blue, #6E8EFF);

    overflow: hidden;
`

const MiddleCardWrapper = styled.div`
    position: absolute;
    top: 310px;
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: center;

    opacity: ${(prop) => prop.$visible ? 1 : 0};
    transition: opacity 100ms ease-in-out;
    
    z-index: 100;
`;

const StyledCard = styled(Card)`
    margin-right: 16px;
`;

const StyledCardGrid = styled(CardGrid)``;

const TopBackground = styled.div`
    position: absolute;
    background-color: #32363A;

    width: 100vw;
    height: 400px;
    
    z-index: -1;
`;

const CardListWrapper = styled.div`
    position: absolute;
    top: 300px;
    width: 100vw;

    opacity: ${(prop) => prop.$visible ? 1 : 0};
    transition: opacity 100ms ease-in-out;

    display: flex;
    flex-direction: row;
    justify-content: center;    
`;

const CardListGrid = styled.div`
    width: 314px;
    
    display: ${(prop) => prop.$visible ? 'grid' : 'none'};

	grid-template-columns: 100px 100px 100px;
    grid-row-gap: 14px;
    grid-column-gap: 7px;

    margin-bottom: 20px;
`;

const CardContentWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    padding-top: 30px;

    position: fixed;
    
    background: rgba(48, 47, 65, 0.21);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    display: block;
    pointer-events: ${(prop) => prop.$visible ? 'auto' : 'none'};

    z-index: 1000;
    
    opacity: ${(prop) => prop.$visible ? 1 : 0};
    transition: opacity 150ms ease-in-out;

    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const FlipIconWrapper = styled.div`
    width: 50px;
    height: 50px;
    
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: 690px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;

    opacity: ${(prop) => prop.$visible ? 1 : 0};
    transition: opacity 100ms ease-in-out;
`;

export default function CardListPage() {

    const { showType, setShowType } = useShowTypeState();

    const [cardType,] = useState("course");
    const [cardContentShow, setCardContentShow] = useState(false);
    const [largeCardFlipped, setLargeCardFlipped] = useState(false);

    const cardCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const onClickSmallCard = () => {
        setCardContentShow(true);
    };

    const onClickLargeCard = () => {
        setLargeCardFlipped(prevState => !prevState);
    };

    const onClickCardContentWrapper = () => {
        setCardContentShow(false);
    };

    /**
     * 
     * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e 
     */
    const onClickFlipIcon = (e) => {
        e.stopPropagation();

        setLargeCardFlipped(prevState => !prevState);
    };

    const onClickLargeButton = () => {
        setShowType("cardgrid");
    };

    return (
        <div>
            <TopBackground />

            <Header />
            <BubbleWrapper>
                <BackgroundBubble>
                    <CardWrapper>
                        <StyledCard />
                        <StyledCardGrid />
                    </CardWrapper>
                    <DescriptionWrapper>
                        올해 나의 운세는 ‘00’입니다!<br />
                        00은 물론 나머지 ~~<br />
                        들도 이루는 멋진 한 해가 되길 응원합니다
                    </DescriptionWrapper>
                </BackgroundBubble>
            </BubbleWrapper>

            <RoundWrapper>
                <BlueRounded />
            </RoundWrapper>

            <ButtonWrapper $visible={showType == "card"}>
                <LargeButton text="운세카드 모아보기" onClick={() => onClickLargeButton()} />
            </ButtonWrapper>

            <MiddleCardWrapper $visible={showType == "card"}>
                <MiddleCard type={cardType} text="ㅋㅋ" author="우효" />
            </MiddleCardWrapper>

            <CardListWrapper $visible={showType == "cardgrid"}>
                <CardListGrid $visible={showType == "cardgrid"}>
                    {
                        cardCount.map((value, index) => {
                            return <SmallCard key={index} type={cardType} onClick={() => onClickSmallCard()} />
                        })
                    }
                </CardListGrid>
            </CardListWrapper>

            <CardContentWrapper $visible={cardContentShow} onClick={() => onClickCardContentWrapper()}>
                <LargeCard type="love" onClick={() => onClickLargeCard()} flippable={false} flip={largeCardFlipped}
                    text="친구야 ㅎㅇ" author="엉" />
                <FlipIconWrapper onClick={(e) => onClickFlipIcon(e)}>
                    <FlipIcon />
                </FlipIconWrapper>
            </CardContentWrapper>
        </div >
    );
}