import { styled } from "styled-components";
import Header from "../CardListPage/components/Header";

import MiddleCard from "../CardListPage/components/MiddleCard";
import { useRef, useState } from "react";
import LargeButton from "../CardListPage/components/LargeButton";
import { useNavigate } from "react-router";

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

const BackgroundCircle = styled.div`
  width: 630px;
  height: 630px;

  border-radius: 630px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(220, 233, 245, 0.2) 0%,
    rgba(220, 233, 245, 0) 100%
  );
`;

const DescriptionWrapper = styled.div`
  margin-top: 120px;
  font-size: 15px;
  font-weight: 400;
  font-family: "PyeongChang";

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #dce9f5;
`;

const MiddleCardsWrapper = styled.div`
  margin-top: 84px;
  column-gap: 16px;

  padding-left: calc(50vw - 110px);
  padding-right: calc(50vw - 110px);

  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory; /* y 축 방향으로만 scroll snap 적용 */

  // remove scorllbar
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MiddleCardWrapper = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: center;

  // if $activated prop is false, then make it more darker, and apply transition.
  filter: ${(props) =>
    props.$activated ? "brightness(100%)" : "brightness(50%)"};
  transition: filter 0.1s ease-in-out;
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;

  background-color: ${(props) => (props.$activated ? "#DCE9F5" : "#53565E")};
  transition: background-color 0.1s ease-in-out;
`;

const BallWrapper = styled.div`
  column-gap: 8px;
  display: flex;
  flex-direction: row;
`;

const BallsWrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 40px;
`;

const ButtonWrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 58px;
`;

export default function CardSelectPage() {
  const navigate = useNavigate();
  const types = [
    "course",
    "health",
    "love",
    "money",
    "promotion",
    "test",
    "lucky",
  ];
  const [checkedType, setCheckedType] = useState("");

  const [scroll, setScroll] = useState(0);
  /**
   * @type {React.MutableRefObject<HTMLDivElement>}
   */
  const wrapperRef = useRef();

  const onScrolled = (e) => {
    setScroll(e.target.scrollLeft);
  };

  const onChecked = (name) => {
    setCheckedType(name);
  };

  const setCardIndex = (index) => {
    wrapperRef.current.scrollTo({ left: index * 236, behavior: "smooth" });
    setScroll(index * 236);
  }

  return (
    <>
      <Background>
        <BackgroundCircle />
      </Background>

      <Header backactivate={true} backurl="/login" />

      <DescriptionWrapper>
        친구에게 메시지와 함께 보낼
        <br />
        운세카드를 선택해주세요.
      </DescriptionWrapper>

      <MiddleCardsWrapper onScroll={(e) => {
        onScrolled(e)
      }} ref={wrapperRef}>
        {types.map((type, index) => (
          <MiddleCardWrapper
            key={index}
            $activated={Math.round(scroll / 236) === index}
          >
            <MiddleCard
              type={type}
              flippable={false}
              checkable={true}
              checked={type === checkedType}
              onCheck={() => onChecked(type)}
              onClick={() => {
                setCardIndex(index);
              }}
            />
          </MiddleCardWrapper>
        ))}
      </MiddleCardsWrapper>

      <BallsWrapper>
        <BallWrapper>
          {types.map((type, index) => (
            <Ball $activated={Math.round(scroll / 236) === index} key={index} />
          ))}
        </BallWrapper>
      </BallsWrapper>

      <ButtonWrapper>
        <LargeButton
          activated={checkedType != ""}
          text="다음으로"
          onClick={() => navigate("/letter")}
        />
      </ButtonWrapper>
    </>
  );
}
