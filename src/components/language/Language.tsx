import { useContext } from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import {
  CurrentLang,
  CurrentLangLi,
  LangImg,
  LangWrapper,
} from "./LanguageStyles";

import { LanguageContext } from "../../context/LanguageContext";

import { ko, uz, ru } from "../../assets/images/components/language";

const data = [
  { name: "Uz", img: uz, id: "uz" },

  { name: "Ko", img: ko, id: "ko" },

  { name: "Ru", img: ru, id: "ru" },
];

const Language = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { openListOfLang, setOpenListOfLang, chooseLang, handleGetLang } =
    useContext(LanguageContext);

  return (
    <LangWrapper>
      <Dropdown>
        <TriggerButton>
          {data
            .filter((lang) => lang.id === chooseLang)
            .map((lang, index) => {
              return (
                <CurrentLang
                  key={index}
                  onClick={() => setOpenListOfLang(!openListOfLang)}
                >
                  <LangImg src={lang.img} />
                  <p>{lang.name}</p>
                </CurrentLang>
              );
            })}
        </TriggerButton>
        <Menu slots={{ listbox: StyledListbox }}>
          <StyledMenuItem>
            <CurrentLangLi onClick={() => handleGetLang("uz")}>
              <LangImg src={uz} />
              <p>Uz</p>
            </CurrentLangLi>
          </StyledMenuItem>

          <StyledMenuItem>
            <CurrentLangLi onClick={() => handleGetLang("ko")}>
              <LangImg src={ko} />
              <p>Ko</p>
            </CurrentLangLi>
          </StyledMenuItem>

          <StyledMenuItem>
            <CurrentLangLi onClick={() => handleGetLang("ru")}>
              <LangImg src={ru} />
              <p>Ru</p>
            </CurrentLangLi>
          </StyledMenuItem>
        </Menu>
      </Dropdown>
    </LangWrapper>
  );
};

export default Language;
const blue = {
  50: "#F0F7FF",
  100: "#DAECFF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 2px 16px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  z-index: 1;
  `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 16px;
  line-height: 1.5;
  background: transparent;
  border:none;
  color: ${theme.palette.mode === "dark" ? blue[300] : blue[500]};
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  `
);
