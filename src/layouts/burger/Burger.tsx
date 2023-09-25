import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BurgerIcon } from "../header/HeaderStyles";
import { burgerIcon } from "../../assets/images";
import { Link } from "react-router-dom";
import { BurgerCansel, BurgerWrapper } from "./BurgerStyles";
import CloseIcon from "@mui/icons-material/Close";

type Anchor = "top" | "left" | "bottom" | "right";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClick = () => {
    const section = document.getElementById("#contact-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <BurgerWrapper>
      <Box
        sx={{
          width: "100vw",
          background: "linear-gradient(145deg, #27D0A5 9.96%, #029ECF 97.44%)",
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <BurgerCansel>
          <CloseIcon style={{ color: "#fff", fontSize: "30px" }} />
        </BurgerCansel>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M13.4 26.3796V21.2796C13.4 20.3779 13.7266 19.5131 14.308 18.8754C14.8893 18.2378 15.6778 17.8796 16.5 17.8796C17.3222 17.8796 18.1107 18.2378 18.692 18.8754C19.2734 19.5131 19.6 20.3779 19.6 21.2796V26.3796M1 9.37961L16.0846 1.10741C16.2136 1.03677 16.3558 1 16.5 1C16.6442 1 16.7864 1.03677 16.9154 1.10741L32 9.37961"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.9001 14.4805V28.0805C28.9001 28.9822 28.5735 29.847 27.9921 30.4846C27.4108 31.1223 26.6223 31.4805 25.8001 31.4805H7.2001C6.37793 31.4805 5.58943 31.1223 5.00807 30.4846C4.4267 29.847 4.1001 28.9822 4.1001 28.0805V14.4805"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ListItemIcon>
              <ListItemText>
                <Link to={"/"}>Home</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    d="M18.7 11.9H15.3V8.5H18.7M18.7 25.5H15.3V15.3H18.7M17 0C14.7675 0 12.5569 0.439718 10.4944 1.29405C8.43185 2.14838 6.55778 3.40059 4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208C6.55778 30.5994 8.43185 31.8516 10.4944 32.706C12.5569 33.5603 14.7675 34 17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17C34 14.7675 33.5603 12.5569 32.706 10.4944C31.8516 8.43185 30.5994 6.55778 29.0208 4.97918C27.4422 3.40059 25.5682 2.14838 23.5056 1.29405C21.4431 0.439718 19.2325 0 17 0Z"
                    fill="white"
                  />
                </svg>
              </ListItemIcon>
              <ListItemText>
                <Link to={"/about-us"}>About Us</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                >
                  <path
                    d="M25.351 30.9997H5.64339C4.9921 31.0036 4.34735 30.8697 3.75152 30.6067C3.15569 30.3437 2.62227 29.9575 2.18633 29.4736C1.75039 28.9897 1.4218 28.4191 1.22217 27.7991C1.02253 27.1792 0.956363 26.524 1.02802 25.8766L2.57417 12.2844C2.63691 11.7173 2.90748 11.1936 3.33364 10.8143C3.75981 10.435 4.31136 10.2271 4.88185 10.2305H26.1126C26.6831 10.2271 27.2346 10.435 27.6608 10.8143C28.0869 11.1936 28.3575 11.7173 28.4202 12.2844L29.9202 25.8766C29.9915 26.5201 29.9265 27.1714 29.7296 27.7881C29.5327 28.4048 29.2082 28.9733 28.7773 29.4564C28.3464 29.9396 27.8186 30.3267 27.2283 30.5925C26.6381 30.8584 25.9984 30.9971 25.351 30.9997Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.2666 10.2307C6.2666 7.7826 7.23912 5.43472 8.97022 3.70362C10.7013 1.97252 13.0492 1 15.4973 1C17.9455 1 20.2934 1.97252 22.0245 3.70362C23.7556 5.43472 24.7281 7.7826 24.7281 10.2307M9.72813 17.1538H21.2666"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ListItemIcon>
              <ListItemText>
                <Link to={"/products"}>Our Products</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M24 24H3V3H24M24 0H3C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V24C0 24.7956 0.31607 25.5587 0.87868 26.1213C1.44129 26.6839 2.20435 27 3 27H24C24.7956 27 25.5587 26.6839 26.1213 26.1213C26.6839 25.5587 27 24.7956 27 24V3C27 2.20435 26.6839 1.44129 26.1213 0.87868C25.5587 0.31607 24.7956 0 24 0ZM20.25 19.875C20.25 17.625 15.75 16.5 13.5 16.5C11.25 16.5 6.75 17.625 6.75 19.875V21H20.25M13.5 13.875C14.3951 13.875 15.2535 13.5194 15.8865 12.8865C16.5194 12.2535 16.875 11.3951 16.875 10.5C16.875 9.60489 16.5194 8.74645 15.8865 8.11351C15.2535 7.48058 14.3951 7.125 13.5 7.125C12.6049 7.125 11.7465 7.48058 11.1135 8.11351C10.4806 8.74645 10.125 9.60489 10.125 10.5C10.125 11.3951 10.4806 12.2535 11.1135 12.8865C11.7465 13.5194 12.6049 13.875 13.5 13.875Z"
                    fill="white"
                  />
                </svg>
              </ListItemIcon>
              <ListItemText>
                <Link to={"/"} onClick={() => handleClick()}>
                  Contact Us
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.33333 6.66667C8.33333 4.89856 9.03571 3.20286 10.286 1.95262C11.5362 0.702379 13.2319 0 15 0C16.7681 0 18.4638 0.702379 19.714 1.95262C20.9643 3.20286 21.6667 4.89856 21.6667 6.66667C21.6667 8.43478 20.9643 10.1305 19.714 11.3807C18.4638 12.631 16.7681 13.3333 15 13.3333C13.2319 13.3333 11.5362 12.631 10.286 11.3807C9.03571 10.1305 8.33333 8.43478 8.33333 6.66667ZM8.33333 16.6667C6.1232 16.6667 4.00358 17.5446 2.44078 19.1074C0.877974 20.6702 0 22.7899 0 25C0 26.3261 0.526784 27.5979 1.46447 28.5355C2.40215 29.4732 3.67392 30 5 30H25C26.3261 30 27.5979 29.4732 28.5355 28.5355C29.4732 27.5979 30 26.3261 30 25C30 22.7899 29.122 20.6702 27.5592 19.1074C25.9964 17.5446 23.8768 16.6667 21.6667 16.6667H8.33333Z"
                    fill="white"
                  />
                </svg>
              </ListItemIcon>
              <ListItemText>
                <Link to={"/login"}>Login</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </BurgerWrapper>
  );

  return (
    <BurgerWrapper>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <BurgerIcon onClick={toggleDrawer(anchor, true)}>
            <img src={burgerIcon} alt="burgerIcon" />
          </BurgerIcon>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </BurgerWrapper>
  );
}
