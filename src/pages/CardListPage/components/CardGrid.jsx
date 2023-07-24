import { ReactComponent as CardGridIcon } from "../assets/cardgrid.svg"
import PropTypes from 'prop-types';
import { useShowTypeState } from "../states/showTypeState";
import { styled } from "styled-components";

const StyledCardGridIcon = styled(CardGridIcon)`
    fill: ${(prop) => prop.$clicked ? "#D0D5E1" : "#53565E"};

    transition: fill 0.1s ease-in-out;
`;

/**
 * 
 * @param {{onClick: () => void}} parameter 
 */
export default function CardGrid({ onClick }) {
    const { showType, setShowType } = useShowTypeState();

    const onIconClicked = () => {
        setShowType("cardgrid");
        onClick?.call();
    };

    return <StyledCardGridIcon onClick={onIconClicked} $clicked={showType == "cardgrid"} />;
}

CardGrid.propTypes = {
    onClick: PropTypes.func
}