import PropTypes from "prop-types";
import { styled } from "styled-components";

import QuestionCard from "./asset/question.svg";
import BlueQuestionCard from "./asset/bluequestion.svg";

const CardContainer = styled.div`
  margin-top: 81px;
  position: relative;
  display: flex;
  flex-direction: row;
  left: calc(50% - 110px);
  flex: 0 0 auto;
`;

const CardWrapper = styled.div`
  position: absolute;

  &:first-of-type {
    left: -140px;
    top: 30px;
    transform: rotate(-15deg);
  }
  &:last-child {
    left: 140px;
    top: 30px;
    transform: rotate(15deg);
  }
`;
const CardImg = styled.img`
  &.checked {
    transition: 0.1s ease;
    transform: translateY(-80px);
  }
`;

export default function Card({ data, isChecked, handleClick }) {
  return (
    <CardContainer>
      {data.map((index) => (
        <CardWrapper key={index}>
          <CardImg
            className={`${isChecked[index] ? "checked" : ""}`}
            src={`${isChecked[index] ? BlueQuestionCard : QuestionCard}`}
            onClick={() => handleClick(index)}
          />
        </CardWrapper>
      ))}
    </CardContainer>
  );
}

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  isChecked: PropTypes.bool,
  handleClick: PropTypes.func,
};
