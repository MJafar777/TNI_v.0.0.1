import { Link } from "react-router-dom";
import { whiteLogo } from "../../assets/images";

import {
  NavbarItem,
  BurgerIcon,
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

import burgerIcon from "../../assets/images/icons/burgerIcon.svg";

import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useButtonIsClickedStateContext } from "../../context/useButtonIsClickedContext";

const Header = () => {
  const { setRequestOpen } = useButtonIsClickedStateContext();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);

  return (
    <HeaderWrapperSection>
      <HeaderWrapper
        style={{
          display: `${scrolling ? "flex" : "none"}`,
        }}
      >
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
          </NavbarItemBox>

          <NavbarItemBox>
            <Link to={"/contact-us"}>
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

          <RequestBtn onClick={() => setRequestOpen(true)}>
            Request Quote{" "}
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
      </HeaderWrapper>
    </HeaderWrapperSection>
  );
};

export default Header;
