import { styled } from "styled-components";

import { ReactComponent as HelperIcon } from "../assets/helper.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as BackIcon } from "../assets/back.svg";

import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import Sidebar from "../../../components/Sidebar";
import { useHelpModal } from "../../../atoms/helpAtom";

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

const MenuButton = styled.button`
  background-color: transparent;
  border-width: 0;
`;

const BackStyledIcon = styled(BackIcon)`
  margin-left: 11px;
  margin-top: 44px;
  cursor: pointer;

  display: ${(props) => (props.$display ? "block" : "none")};
`;

const Blank = styled.div`
  flex: 1;
`;

const SideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 100vh;
  background-color: rgba(220, 233, 245, 1);
  overflow-x: hidden;
  transition: 0.5s;
  z-index: 2000;

  // open 상태에 따라 너비 변경
  width: ${(props) => (props.open ? "304px" : "0")};
`;

/**
 *
 * @param {{backactivate: boolean, backurl: string}} param0
 * @returns
 */
export default function Header({ backactivate, backurl }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { openHelpModal } = useHelpModal();

  const handleHelpButton = () => {
    openHelpModal();
  }

  const handleMenuButton = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseSideBar = () => {
    setOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <BackStyledIcon
          $display={backactivate}
          onClick={() => navigate(backurl)}
        />
        <Blank />
        <div>
          <MenuButton onClick={handleHelpButton}>
            <HelperStyledIcon />
          </MenuButton>
          <MenuButton onClick={handleMenuButton}>
            <MenuStyledIcon />
          </MenuButton>
        </div>
      </HeaderWrapper>
      <SideMenuWrapper open={open}>
        <Sidebar onClose={handleCloseSideBar} />
      </SideMenuWrapper>
    </>
  );
}

Header.propTypes = {
  backactivate: PropTypes.bool,
  backurl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.bool,
};
