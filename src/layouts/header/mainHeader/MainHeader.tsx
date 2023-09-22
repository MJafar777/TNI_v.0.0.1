import { Link } from "react-router-dom";
import { logo } from "../../../assets/images";
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
import Language from "../../../components/language/Language";

const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      <MainHeaderLogo>
        <img src={logo} alt="logo" />
      </MainHeaderLogo>

      <Navbar />

      <MainHeaderFeatures>
        <NavbarItemBox>
          <Link to={"/login"}>
            <NavbarItem>Login</NavbarItem>
          </Link>
        </NavbarItemBox>
        
        <Language/>

        <RequestBtn>Request Quote</RequestBtn>

        <SearchInput>
          <input type="text" placeholder="Search" />

          <SearchIconBox>
            <SearchIcon className="headerSearchIcon" />
          </SearchIconBox>
        </SearchInput>
      </MainHeaderFeatures>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
