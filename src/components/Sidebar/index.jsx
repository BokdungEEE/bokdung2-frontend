import styled from "styled-components";
import { ReactComponent as CancleIcon } from "../../assets/cancle.svg";

const Wrapper = styled.div`
  width: 304px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CancelStyledIcon = styled(CancleIcon)`
  margin-left: 258px;
  margin-bottom: 70px;
  margin-top: 44px;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Button = styled.button`
  color: var(--black, #32363a);
  font-family: PyeongChangPeace;
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  width: 304px;
  height: 60px;
  align-items: center;
  border-width: 0;
  background-color: transparent;
  border-width: 0;
  border-bottom: 1px solid var(--gray-3, #d0d5e1);
`;

const Description = styled.p`
  color: var(--black, #32363a);
  font-family: PyeongChang;
  font-size: 16px;
  font-weight: 400;
  margin-left: 30px;
`;

import PropTypes from "prop-types";
import HelpModal from "../HelpModal";

const Sidebar = ({ onClose }) => {
  return (
    <>
      <Wrapper>
        <CancelStyledIcon onClick={onClose} />
        <ButtonWrapper>
          <Button>샌드포춘이란?</Button>
          <Button>로그아웃</Button>
          <Button>내 페이지로 가기</Button>
        </ButtonWrapper>
        <Description>문의 : ???</Description>
      </Wrapper>
      <HelpModal />
    </>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
