/* eslint-disable react/no-unescaped-entities */
import { styled } from "styled-components";
import Header from "../CardListPage/components/Header";
import LargeButton from "../CardListPage/components/LargeButton";

import { ReactComponent as TopIcon } from "./assets/TopIcon.svg";
import { ReactComponent as BottomIcon } from "./assets/BottomIcon.svg";
import { ReactComponent as MiddleIcon } from "./assets/MiddleIcon.svg";
import { useNavigate } from "react-router-dom";


const Background = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  top: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #32363a;

  z-index: -1;
`;


const RoundWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: fixed;
  overflow: hidden;

  top: 299px;
  z-index: -1;
`;

const BlueRounded = styled.div`
  width: 630px;
  height: 630px;
  flex-shrink: 0;
  background: radial-gradient(
    closest-side,
    rgba(110, 142, 255, 0.8) 0%,
    rgba(110, 142, 255, 0) 100%
  );
  border-radius: 630px;
  /* background: var(--blue, #6E8EFF); */

  overflow: hidden;
`;
const SideWrapper = styled.div`
  margin-top: 100px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 80px;
  margin-bottom: 70px;
  width: 100vw;
  z-index: 2;
`;

const ContentsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--white, #DCE9F5);
`;

const Contents = styled.div`
    padding: 0px 20px 0px 20px;
        
    text-align: center;

    /* PyeongChang/body 3 */
    font-family: PyeongChang;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
`;


const Title = styled.div`
    color: var(--white, #DCE9F5);

    /* PyeongChang Peace/title 4 */
    font-family: PyeongChangPeace;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
`;

const ImgWrapper = styled.div`
    margin-top: 38px;
    margin-bottom: 38px;
`;

export default function IntroducePage() {
    const navigate = useNavigate();

    return (
        <>
            <Background />
            <RoundWrapper>
                <BlueRounded />
            </RoundWrapper>
            <Header backactivate={true} backurl={-1} />
            <SideWrapper />
            <ContentsWrapper>
                <Title>
                    샌드포춘이란?
                </Title>
                <ImgWrapper>
                    <TopIcon />
                </ImgWrapper>
                <Contents>
                    “샌드포춘"서비스는 소중한 사람에게 편지가 적혀있는 운세카드를 주고받는 서비스입니다.<br />
                    <br />
                    사랑, 재물, 학업 등 운세가 적혀있는 카드를 선택하고, 카드 뒷면에 가족, 친구에게 메시지를 작성해서<br />
                    운세카드를 보낼 수 있어요!<br />
                </Contents>
                <ImgWrapper>
                    <MiddleIcon />
                </ImgWrapper>
                <Contents>

                    사용자가 받은 카드에 적혀있는 운세에서 가장 많이<br />
                    받은 운세 3가지 중 랜덤으로 하나를 골라<br />
                    올해의 운세를 확인해볼 수 있어요!<br />
                </Contents>
                <ImgWrapper>
                    <BottomIcon />
                </ImgWrapper>
                <Contents>
                    사용자가 받은 카드는 2023년 x월x일 xx시 이후에<br />
                    확인 가능합니다.
                </Contents>
            </ContentsWrapper>
            <ButtonWrapper>
                <LargeButton
                    text="내 페이지로 가기"
                    onClick={() => navigate("/mainprev")}
                />
            </ButtonWrapper>
        </>
    );
}
