/* eslint-disable react/no-unescaped-entities */
import { styled } from "styled-components";
import Header from "../CardListPage/components/Header";
import LargeButton from "../CardListPage/components/LargeButton";
import { ReactComponent as GlassImg } from "./assets/GlassImage.svg";
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

const Top = styled.div`
    color: var(--white, #DCE9F5);
    text-align: center;

    /* PyeongChang/body 3 */
    font-family: PyeongChang;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    margin-bottom: 20px;
`;

const Bottom = styled.div`
    color: var(--gray2, #7A7F8D);
    text-align: center;

    /* PyeongChang Peace/body 4 */
    font-family: PyeongChang Peace;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px; /* 150% */
`;

const GlassWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 27px;
    margin-bottom: 42px;
`;

export default function MainAfterPage() {
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
                <Top>
                    하단의 버튼을 눌러<br />
                    친구들에게 받은 메시지와<br />
                    올해 나의 운세를 확인해보세요!
                </Top>
                <Bottom>
                    받은 카드 개수 : 38개
                </Bottom>
            </ContentsWrapper>
            <GlassWrapper>
                <GlassImg />
            </GlassWrapper>
            <ButtonWrapper>
                <LargeButton
                    text="나의 운세 확인하기"
                    onClick={() => navigate("/pickcard")}
                />
            </ButtonWrapper>
        </>
    );
}
