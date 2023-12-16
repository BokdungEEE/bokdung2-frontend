import { styled } from "styled-components";
import Header from "../CardListPage/components/Header";
import SmallCard from "../CardListPage/components/SmallCard";
import { ReactComponent as KakaoIcon } from "./assets/kakao.svg";
import { getKakaoLoginUrl } from "../../lib/login";

const Background = styled.div`
    position: fixed;
    top: 0;

    width: 100vw;
    height: 100vh;

    background-color: #32363A;
`;

const DescriptionWrapper = styled.div`
    font-family: "PyeongChang";
    font-weight: 400;
    font-size: 15px;

    text-align: center;
    margin-top: 120px;

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

export default function LoginPage() {
    const onClickLogin = () => {
        (async () => {
            const url = await getKakaoLoginUrl();
            location.href = url;
        })();
    };

    return <Background>
        <Header />
        <DescriptionWrapper>
            운세카드를 주고받기 위해서는<br />
            로그인이 필요합니다.
        </DescriptionWrapper>

        <LoginWrapper>
            <LoginBtn onClick={onClickLogin}>
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