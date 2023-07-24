import styled from "styled-components"

import PropTypes from "prop-types"

const BubbleWrapper = styled.div`
    position: absolute;

    width: 100vw;

    display: flex;

    flex-direction: row;
    justify-content: center;
`

const BackgroundBubble = styled.div`
    width: 298px;
    height: 298px;
    flex-shrink: 0;

    border-radius: 298px;
    background: rgba(220, 233, 245, 0.04);
    box-shadow: 0px 0px 36px 0px #DCE9F5 inset;

    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

/**
 * 
 * @param {{children: React.ReactNode}} param0 
 * @returns 
 */
export default function Bubble({ children }) {
    return <>
        <BubbleWrapper>
            <BackgroundBubble>
                {children}
            </BackgroundBubble>
        </BubbleWrapper>
    </>
}

Bubble.propTypes = {
    children: PropTypes.node
}