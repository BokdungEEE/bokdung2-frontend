import { styled } from "styled-components";
import Header from "../CardListPage/components/Header";
import SmallCard from "../CardListPage/components/SmallCard";
import { ReactComponent as KakaoIcon } from "./assets/kakao.svg";
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

const LoginWrapper = styled.div`
    margin-top: 522px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const LoginBtn = styled.div`
    width: 230px;
    height: 52px;
    background-color: #FEE500;

    font-size: 18px;
    font-weight: 400;
    border-radius: 12px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    text-align: center;

    font-family: "PyeongChang";
`;

export default function OpenPage() {
    const navigate = useNavigate();

    return <Background>
        <Header />
        <TitleWrapper>
            샌드포춘
        </TitleWrapper>
        <DescriptionWrapper>
            친구들에게 나의 운세를 받아보세요!<br />
            내 링크를 공유하면 친구들에게 운세카드와<br />
            메시지를 받을 수 있어요
        </DescriptionWrapper>


        <LoginWrapper>
            <LoginBtn onClick={() => navigate("/mainprev")}>
                <KakaoIcon />
                카카오 로그인
            </LoginBtn>
        </LoginWrapper>
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