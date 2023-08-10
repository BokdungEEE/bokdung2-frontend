import { styled } from "styled-components";
import Header from "../CardListPage/components/Header";

import LargeButton from "../CardListPage/components/LargeButton";
import { useState } from "react";
import { useNavigate } from "react-router";

import Card from "./Card";

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

const ButtonWrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 410px;
`;

export default function MyPage() {
  const navigate = useNavigate();
  const [cardList] = useState([1, 2, 3]);
  const [isCardSelect, setisCardSelect] = useState(false);

  const handleClick = (id) => {
    const newArr = Array(3).fill(false);
    newArr[id] = true;
    setisCardSelect(newArr);
  };

  return (
    <>
      <Background>
        <BackgroundCircle />
      </Background>

      <Header backactivate={true} backurl="/login" />

      <DescriptionWrapper>
        친구들에게 가장 많이 받은
        <br />
        운세카드 중
        <br />
        올해의 대표 운세를 뽑아보세요
      </DescriptionWrapper>
      <Card
        data={cardList}
        isChecked={isCardSelect}
        handleClick={handleClick}
      />
      <ButtonWrapper>
        <LargeButton
          activated={isCardSelect != ""}
          text="선택 완료"
          onClick={() => navigate("/main")}
        />
      </ButtonWrapper>
    </>
  );
}
