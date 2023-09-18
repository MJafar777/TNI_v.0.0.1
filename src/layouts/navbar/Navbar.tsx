import { Link } from "react-router-dom";
import { NavbarItem, NavbarItemBox, NavbarWrapper } from "./navbarStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  return (
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
        <Link to={"/prodacts"}>
          <NavbarItem>Our Products</NavbarItem>
        </Link>

        <KeyboardArrowDownIcon className="keyboardArrowDownIcon" />
      </NavbarItemBox>

      <NavbarItemBox>
        <Link to={"/contact-us"}>
          <NavbarItem>Contact Us</NavbarItem>
        </Link>
      </NavbarItemBox>
    </NavbarWrapper>
  );
};

export default Navbar;
