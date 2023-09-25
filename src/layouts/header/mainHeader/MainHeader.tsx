import { Link } from "react-router-dom";
import { logo2 } from "../../../assets/images";
import { burgerIcon, logo } from "../../../assets/images";

// ---------- Styled Templates ----------
import {
  RequestBtn,
  SearchInput,
  SearchIconBox,
  MainHeaderLogo,
  MainHeaderWrapper,
  MainHeaderFeatures,
} from "./MainHeaderStyles";

// ---------- @MUI ----------
import SearchIcon from "@mui/icons-material/Search";

import Navbar from "../../navbar/Navbar";
import { BurgerIcon } from "../HeaderStyles";
import { NavbarItemBox, NavbarItem } from "../../navbar/navbarStyles";
import { useButtonIsClickedStateContext } from "../../../context/useButtonIsClickedContext";

const MainHeader = () => {
  const { setRequestOpen } = useButtonIsClickedStateContext();

  return (
    <MainHeaderWrapper>
      <MainHeaderLogo>
        <img src={logo} alt="logo" className="desctopLogo" />
        <img src={logo2} alt="log2" className="mobileLogo" />
      </MainHeaderLogo>

      <Navbar />

      <MainHeaderFeatures>
        <NavbarItemBox>
          <Link to={"/login"}>
            <NavbarItem>Login</NavbarItem>
          </Link>
        </NavbarItemBox>

        <RequestBtn onClick={() => setRequestOpen(true)}>
          Request Quote
        </RequestBtn>

        <SearchInput>
          <input type="text" placeholder="Search" />

          <SearchIconBox>
            <SearchIcon className="headerSearchIcon" />
          </SearchIconBox>
        </SearchInput>

        <BurgerIcon>
          <img src={burgerIcon} alt="" />
        </BurgerIcon>
      </MainHeaderFeatures>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
