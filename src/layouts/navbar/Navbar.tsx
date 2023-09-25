import { Link } from "react-router-dom";
import { NavbarItem, NavbarItemBox, NavbarWrapper } from "./navbarStyles";

const Navbar = () => {
  const handleClick = () => {
    const section = document.getElementById("#contact-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <Link to={"/products"}>
          <NavbarItem>Our Products</NavbarItem>
        </Link>
      </NavbarItemBox>

      <NavbarItemBox>
        <Link to={"/"} onClick={handleClick}>
          <NavbarItem>Contact Us</NavbarItem>
        </Link>
      </NavbarItemBox>
    </NavbarWrapper>
  );
};

export default Navbar;
