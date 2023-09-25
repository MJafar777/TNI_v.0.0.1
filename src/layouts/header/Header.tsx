import { Link, useLocation } from "react-router-dom";
import { whiteLogo } from "../../assets/images";

import {
  NavbarItem,
  RequestBtn,
  SearchInput,
  NavbarItemBox,
  NavbarWrapper,
  SearchIconBox,
  HeaderWrapper,
  MainHeaderLogo,
  MainHeaderFeatures,
  HeaderWrapperSection,
} from "./HeaderStyles";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import SearchIcon from "@mui/icons-material/Search";

import { useEffect, useState } from "react";
import { useButtonIsClickedStateContext } from "../../context/useButtonIsClickedContext";

import LanguageForHeader from "../../components/language/LanguageForHeader";
import Burger from "../burger/Burger";

const Header = () => {
  const { setRequestOpen } = useButtonIsClickedStateContext();

  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);

  const handleClick = () => {
    const section = document.getElementById("#contact-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {location.pathname == "/login" ? (
        ""
      ) : (
        <HeaderWrapperSection>
          <HeaderWrapper style={{ display: `${scrolling ? "flex" : "none"}` }}>
            <Link to={"/"}>
              <MainHeaderLogo>
                <img src={whiteLogo} alt="logo" />
              </MainHeaderLogo>
            </Link>

            <NavbarWrapper>
              <NavbarItemBox>
                <Link to={"/"}>
                  <NavbarItem>Home</NavbarItem>
                </Link>
              </NavbarItemBox>

              <NavbarItemBox>
                <Link to={"/about-us"}>
                  <NavbarItem>About Us</NavbarItem>
                </Link>
              </NavbarItemBox>

              <NavbarItemBox className="navbarItemBoz-popower">
                <Link to={"/products"}>
                  <NavbarItem>Our Products</NavbarItem>
                </Link>

                {/* <KeyboardArrowDownIcon className="keyboardArrowDownIcon" /> */}
              </NavbarItemBox>

              <NavbarItemBox>
                <Link to={"/"} onClick={() => handleClick()}>
                  <NavbarItem>Contact Us</NavbarItem>
                </Link>
              </NavbarItemBox>
            </NavbarWrapper>

            <MainHeaderFeatures>
              <NavbarItemBox>
                <Link to={"/login"}>
                  <NavbarItem>Login</NavbarItem>
                </Link>
              </NavbarItemBox>

              <LanguageForHeader />

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
          </HeaderWrapper>
        </HeaderWrapperSection>
      )}
    </>
  );
};

export default Header;
