import styled from "styled-components";
import Bubble from "../CardListPage/components/Bubble";
import SmallCard from "../CardListPage/components/SmallCard";
import LargeButton from "../CardListPage/components/LargeButton";
import Header from "../CardListPage/components/Header";
import { useNavigate } from "react-router";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #32363a;
  z-index: -2;
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

const CardWrapper = styled.div`
  transform: rotate(30deg);

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BubblerWrapper = styled.div`
  position: fixed;
  top: 257px;
`;

const DescriptionWrapper = styled.div`
  user-select: none; /* Likely future */

  margin-top: 120px;

  color: var(--white, #dce9f5);
  text-align: center;

  font-family: PyeongChang;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 546px;
  width: 100vw;
  z-index: 2;
`;

export default function SentPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Background />
      <RoundWrapper>
        <BlueRounded />
      </RoundWrapper>
      <BubblerWrapper>
        <Bubble>
          <CardWrapper>
            <SmallCard type="love" />
          </CardWrapper>
        </Bubble>
      </BubblerWrapper>
      <DescriptionWrapper>운세카드를 무사히 전송했습니다</DescriptionWrapper>
      <ButtonWrapper>
        <LargeButton
          text="내 페이지로 가기"
          onClick={() => navigate("/main")}
        />
      </ButtonWrapper>
    </>
  );
}
