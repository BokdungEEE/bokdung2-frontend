import { styled } from "styled-components";

import { ReactComponent as HelperIcon } from "../assets/helper.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as BackIcon } from "../assets/back.svg";

import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const HeaderWrapper = styled.div`
    z-index: 1000;

    position: fixed;
    top: 0;

    width: 100vw;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
`;

const HelperStyledIcon = styled(HelperIcon)`
    margin-right: 16px;
    margin-top: 44px;
`;

const MenuStyledIcon = styled(MenuIcon)`
    margin-right: 20px;
    margin-top: 44px;
`;

const BackStyledIcon = styled(BackIcon)`
    margin-left: 11px;
    margin-top: 44px;

    display: ${(props) => props.$display ? "block" : "none"};
`;

const Blank = styled.div`
    flex: 1;
`;

/**
 * 
 * @param {{backactivate: boolean, backurl: string}} param0 
 * @returns 
 */
export default function Header({ backactivate, backurl }) {
    const navigate = useNavigate();

    return (
        <>
            <HeaderWrapper>
                <BackStyledIcon $display={backactivate} onClick={() => navigate(backurl)} />
                <Blank />
                <div>
                    <HelperStyledIcon />
                    <MenuStyledIcon />
                </div>
            </HeaderWrapper>
        </>
    );
}

Header.propTypes = {
    backactivate: PropTypes.bool,
    backurl: PropTypes.string,
}