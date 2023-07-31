import { styled } from "styled-components";
import Header from "../CardListPage/components/Header";
import { useState } from "react";
import { useNavigate } from "react-router";
import Bubble from "../CardListPage/components/Bubble";

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

const BubblerWrapper = styled.div`
  position: fixed;
  top: 257px;
`;

export default function CardSelectPage() {
  //const navigate = useNavigate();
  const types = ["course", "health"];

  const [scroll, setScroll] = useState(0);

  const onScrolled = (e) => {
    setScroll(e.target.scrollLeft);
  };

  return (
    <>
      <Background />
      <RoundWrapper>
        <BlueRounded />
      </RoundWrapper>
      <Header backactivate={true} backurl="/login" />

      <MiddleCardsWrapper onScroll={(e) => onScrolled(e)}>
        {types.map((type, index) => (
          <MiddleCardWrapper
            key={index}
            $activated={Math.round(scroll / 236) === index}
          >
            <BubblerWrapper>
              <Bubble type={type}>{type}</Bubble>
            </BubblerWrapper>
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
    </>
  );
}