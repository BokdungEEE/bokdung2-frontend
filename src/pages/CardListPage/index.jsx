import { styled } from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import MiddleCard from "./components/MiddleCard";
import { useState } from "react";
import { useShowTypeState } from "./states/showTypeState";
import SmallCard from "./components/SmallCard";

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

    font-family: PyeongChangPeace;
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

    opacity: ${(props) => props.visible ? 1 : 0};
    transition: opacity 100ms ease-in-out;
    
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

    opacity: ${(props) => props.visible ? 1 : 0};
    transition: opacity 100ms ease-in-out;

    display: flex;
    flex-direction: row;
    justify-content: center;    
`;

const CardListGrid = styled.div`
    width: 314px;
    
    display: ${(props) => props.visible ? 'grid' : 'none'};

	grid-template-columns: 100px 100px 100px;
    grid-row-gap: 14px;
    grid-column-gap: 7px;

    margin-bottom: 20px;
`;

const CardContentWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    
    background: rgba(48, 47, 65, 0.21);
    backdrop-filter: blur(8px);

    z-index: 1000;

    transition: opacity 1000ms ease-in-out;

    display: ${(props) => props.visible ? 'flex' : 'none'}; 
    opacity: ${(props) => props.visible ? 1 : 0};
`;

export default function CardListPage() {

    const { showType } = useShowTypeState();
    const [cardType,] = useState("course");
    const [cardContentShow, setCardContentShow] = useState(false);

    const cardCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const onClickSmallCard = () => {
        console.log("큭큭");
        setCardContentShow(true);
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

            <MiddleCardWrapper visible={showType == "card"}>
                <MiddleCard type={cardType} />
            </MiddleCardWrapper>

            <CardListWrapper visible={showType == "cardgrid"}>
                <CardListGrid visible={showType == "cardgrid"}>
                    {
                        cardCount.map((value, index) => {
                            return <SmallCard key={index} type={cardType} onClick={() => onClickSmallCard()} />
                        })
                    }
                </CardListGrid>
            </CardListWrapper>

            <CardContentWrapper visible={cardContentShow}>
                ㅋㅋ 빠큐
            </CardContentWrapper>
        </div >
    );
}