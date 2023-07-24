import { ReactComponent as CardIcon } from "../assets/card.svg"
import PropTypes from 'prop-types';
import { useShowTypeState } from "../states/showTypeState";
import { styled } from "styled-components";

const StyledCardIcon = styled(CardIcon)`
    fill: ${(prop) => prop.$clicked ? "#D0D5E1" : "#53565E"};
    
    transition: fill 0.1s ease-in-out;  
`;

/**
 * 
 * @param {{onClick: () => void}} parameter 
 */
export default function Card({ onClick }) {
    const { showType, setShowType } = useShowTypeState();

    const onIconClicked = () => {
        setShowType("card");
        onClick?.call();
    };

    return <StyledCardIcon onClick={onIconClicked} $clicked={showType == "card"} />;

}

Card.propTypes = {
    onClick: PropTypes.func
}