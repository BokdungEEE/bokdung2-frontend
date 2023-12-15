import { styled } from "styled-components";
import Header from "../CardListPage/components/Header";
import LargeButton from "../CardListPage/components/LargeButton";
import SmallCard from "../CardListPage/components/SmallCard";
import { useNavigate } from "react-router";

const Background = styled.div`
    position: fixed;
    top: 0;

    width: 100vw;
    height: 100vh;

    background-color: #32363A;
`;

const TitleWrapper = styled.div`
    font-family: "PyeongChangPeace";
    font-weight: 700;
    font-size: 32px;

    width: 100vw;
    margin-top: 120px;
    text-align: center;

    color: #DCE9F5;
`;

const DescriptionWrapper = styled.div`
    font-family: "PyeongChang";
    font-weight: 400;
    font-size: 15px;

    text-align: center;

    color: #DCE9F5;
`;

const ButtonWrapper = styled.div`
    margin-top: 474px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const BackgroundCardWrapper = styled.div`
    position: fixed;

    top: 370px;
    left: calc((100vw - 375px) / 2 - 25px);

    display: flex;
    flex-direction: row;
    column-gap: 8px;
`;

const CardRowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    transform: translateY( ${(props) => props.$moveY}px );
`;

export default function LinkAfterPage() {
    const navigate = useNavigate();

    return <Background>
        <Header />
        <TitleWrapper>
            샌드포춘
        </TitleWrapper>
        <DescriptionWrapper>
            친구에게 운세카드를<br />
            보낼 수 있는 기간이 아닙니다
        </DescriptionWrapper>
        <ButtonWrapper>
            <LargeButton text="내 페이지로 가기" onClick={() => navigate("/mainafter")} />
        </ButtonWrapper>
        <BackgroundCardWrapper>
            <CardRowWrapper>
                <SmallCard type="love" />
            </CardRowWrapper>
            <CardRowWrapper $moveY={-78}>
                <SmallCard type="health" />
                <SmallCard type="test" />
            </CardRowWrapper>
            <CardRowWrapper $moveY={-116}>
                <SmallCard type="money" />
                <SmallCard type="promotion" />
            </CardRowWrapper>
            <CardRowWrapper $moveY={-39}>
                <SmallCard type="course" />
                <SmallCard type="lucky" />
            </CardRowWrapper>
        </BackgroundCardWrapper>
    </Background>
}