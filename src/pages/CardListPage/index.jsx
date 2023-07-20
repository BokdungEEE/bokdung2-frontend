import { styled } from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";

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

const StyledCard = styled(Card)`
    margin-right: 16px;
`;

const DescriptionWrapper = styled.div`
    margin-top: 21px;

    text-align: center;
    
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

const BlueBackground = styled.div`
    position: absolute;
    width: 100vw;
    top: 450px;

    height: 100vh;
    overflow: hidden;
    background: var(--blue, #6E8EFF);
`

const StyledCardGrid = styled(CardGrid)``;

export default function CardListPage() {

    /**
     * 
     * @param {boolean} state 
     */
    const onClickCard = (state) => {
        console.log(state);
    }

    /**
     * 
     * @param {boolean} state 
     */
    const onClickCardGrid = (state) => {
        console.log(state);
    }

    return (
        <div>
            <Header />
            <BubbleWrapper>
                <BackgroundBubble>
                    <CardWrapper>
                        <StyledCard
                            onClick={(state) => onClickCard(state)} />
                        <StyledCardGrid
                            onClick={(state) => onClickCardGrid(state)} />
                    </CardWrapper>
                    <DescriptionWrapper>
                        올해 나의 운세는 ‘00’입니다!
                        00은 물론 나머지 ~~
                        들도 이루는 멋진 한 해가 되길 응원합니다
                    </DescriptionWrapper>
                </BackgroundBubble>
            </BubbleWrapper>

            <RoundWrapper>
                <BlueRounded />
            </RoundWrapper>
            <BlueBackground>
                쿠쿠
            </BlueBackground>

        </div>
    );
}