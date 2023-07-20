import { useState } from "react"
import { ReactComponent as CardIcon } from "../assets/card.svg"
import { ReactComponent as ClickedCardIcon } from "../assets/clicked_card.svg"
import PropTypes from 'prop-types';

/**
 * 
 * @param {{onClick: (state: boolean) => void}} parameter 
 */
export default function Card({ onClick }) {
    const [clickedState, setClickedState] = useState(false);

    const onIconClicked = () => {
        setClickedState(prevState => {
            onClick(!prevState);
            return !prevState
        });
    };

    if (clickedState) {
        return <ClickedCardIcon onClick={onIconClicked} />;
    } else {
        return <CardIcon onClick={onIconClicked} />;
    }
}

Card.propTypes = {
    onClick: PropTypes.func.isRequired
}