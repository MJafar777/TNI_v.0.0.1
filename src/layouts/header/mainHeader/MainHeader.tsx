import { Link } from "react-router-dom";
import { burgerIcon, logo } from "../../../assets/images";
import { logo2 } from "../../../assets/images";
import Navbar from "../../navbar/Navbar";
import { NavbarItemBox, NavbarItem } from "../../navbar/navbarStyles";

// ---------- Styled Templates ----------
import {
  SearchInput,
  RequestBtn,
  SearchIconBox,
  MainHeaderLogo,
  MainHeaderWrapper,
  MainHeaderFeatures,
} from "./MainHeaderStyles";

// ---------- @MUI ----------
import SearchIcon from "@mui/icons-material/Search";
import { BurgerIcon } from "../HeaderStyles";

const MainHeader = () => {
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

        <RequestBtn>Request Quote</RequestBtn>

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
