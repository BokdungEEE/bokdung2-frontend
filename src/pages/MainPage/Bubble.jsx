import styled from "styled-components";

import PropTypes from "prop-types";

const BubbleWrapper = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BackgroundBubble = styled.div`
  width: 298px;
  height: 298px;
  flex-shrink: 0;

  border-radius: 298px;
  background: rgba(220, 233, 245, 0.04);
  box-shadow: 0px 0px 36px 0px #dce9f5 inset;

  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  line-height: 280px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: var(--white, #dce9f5);
  font-family: PyeongChang Peace;
  font-weight: 700;
  font-size: 64px;
`;

/**
 *
 * @param {{children: React.ReactNode}} param0
 * @returns
 */
export default function Bubble({ children }) {
  return (
    <>
      <BubbleWrapper>
        <BackgroundBubble>{children}</BackgroundBubble>
      </BubbleWrapper>
    </>
  );
}

Bubble.propTypes = {
  children: PropTypes.node,
};
