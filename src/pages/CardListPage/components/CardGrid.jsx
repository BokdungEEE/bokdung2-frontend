import { useState } from "react"
import { ReactComponent as CardGridIcon } from "../assets/cardgrid.svg"
import { ReactComponent as ClickedCardGridIcon } from "../assets/clicked_cardgrid.svg"
import PropTypes from 'prop-types';

/**
 * 
 * @param {{onClick: (state: boolean) => void}} parameter 
 */
export default function CardGrid({ onClick }) {
    const [clickedState, setClickedState] = useState(false);

    const onIconClicked = () => {
        setClickedState(prevState => {
            onClick(!prevState);
            return !prevState
        });
    };

    if (clickedState) {
        return <ClickedCardGridIcon onClick={onIconClicked} />;
    } else {
        return <CardGridIcon onClick={onIconClicked} />;
    }
}

CardGrid.propTypes = {
    onClick: PropTypes.func.isRequired
}