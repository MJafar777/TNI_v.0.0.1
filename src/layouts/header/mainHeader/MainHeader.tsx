import { Link } from "react-router-dom";
import { logo2 } from "../../../assets/images";
import { logo } from "../../../assets/images";

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
import Language from "../../../components/language/Language";

import Navbar from "../../navbar/Navbar";
// import { BurgerIcon } from "../HeaderStyles";
import { NavbarItemBox, NavbarItem } from "../../navbar/navbarStyles";
import { useButtonIsClickedStateContext } from "../../../context/useButtonIsClickedContext";
import Burger from "../../burger/Burger";

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

        <Language />

        <RequestBtn onClick={() => setRequestOpen(true)}>
          Request Quote
        </RequestBtn>

        <SearchInput>
          <input type="text" placeholder="Search" />

          <SearchIconBox>
            <SearchIcon className="headerSearchIcon" />
          </SearchIconBox>
        </SearchInput>

        <Burger />
      </MainHeaderFeatures>
    </MainHeaderWrapper>
  );
};

export default MainHeader;