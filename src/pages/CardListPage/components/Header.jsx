import { styled } from "styled-components";

import { ReactComponent as HelperIcon } from "../assets/helper.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

const HeaderWrapper = styled.div`
    z-index: 1000;

    position: fixed;
    top: 0;

    width: 100vw;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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

export default function Header() {
    return (
        <>
            <HeaderWrapper>
                <HelperStyledIcon />
                <MenuStyledIcon />
            </HeaderWrapper>
        </>
    );
}