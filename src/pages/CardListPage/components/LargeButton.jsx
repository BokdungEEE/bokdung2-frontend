import PropTypes from "prop-types";
import { styled } from "styled-components";

const ButtonWrapper = styled.div`
    display: flex;
    width: 240px;
    height: 52px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 30px;
    background: var(--white, #DCE9F5);

    color: var(--blue, #6E8EFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    /* PyeongChang/body 1 */
    font-family: PyeongChang;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
`;

/**
 * 
 * @param {{text: string, onClick: ()=>void}} param0 
 */
export default function LargeButton({
    text, onClick
}) {
    return <ButtonWrapper onClick={() => onClick()}>
        {text}
    </ButtonWrapper>
}

LargeButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func

}