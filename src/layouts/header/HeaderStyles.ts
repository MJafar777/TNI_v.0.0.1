import { styled, keyframes } from "styled-components";

export const HeaderWrapperSection = styled.header`
  position: fixed;
  z-index: 999;
  background-color: #040b1a;
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid #029ecf;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1366px;
  height: 60px;
  margin: 0px auto;
  padding: 0 20px;
`;

export const MainHeaderLogo = styled.div``;

export const MainHeaderFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  position: relative;

  @media ${(props) => props.theme.breakpoints.xl} {
    gap: 10px;
  }

  @media screen and (max-width: 400px) {
    gap: 0px;
  }
`;

const colorCycle = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const RequestBtn = styled.div`
  padding: 8px 12px;
  border-radius: 50px;
  background: linear-gradient(270deg, #029ecf 0%, #27d0a5 100%);
  color: white;

  font-size: 16px;
  font-family: Mazzard;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  user-select: none;

  animation: ${colorCycle} 5s infinite alternate;

  margin-right: 75px;

  &:hover {
    background: linear-gradient(270deg, #27d0a5 0%, #029ecf 100%);
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    margin-right: 60px;
    font-size: 14px;
    padding: 8px 18px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }

  @media screen and (max-width: 400px) {
    margin-right: 0px;
    text-align: center;
  }
`;

export const SearchInput = styled.div`
  padding: 3px;
  border-radius: 50px;
  border: 2px solid #029ecf;
  height: 44px;
  width: 46px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #040b1a;
  position: absolute;
  right: 0;
  z-index: 2;
  overflow: hidden;
  transition: width 0.4s ease-in-out, background-color 0.4s ease-in-out,
    border-radius 0.4s ease-in-out;

  input {
    position: absolute;
    width: calc(100% - 70px);
    height: 100%;
    right: 55px;
    outline: none;
    border-radius: 50px;
    border: none;
    z-index: 1;
    padding: 5px 0;
    font-size: 16px;
    color: white;
    background-color: #040b1a;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover {
    transition: width 0.4s ease-in-out, background-color 0.4s ease-in-out,
      border-radius 0.4s ease-in-out;

    width: 205px;

    input {
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    height: 38px;
    width: 40px;
    margin-right: 45px;

    input {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const SearchIconBox = styled.div`
  background: linear-gradient(270deg, #029ecf 0%, #27d0a5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36.5px;
  height: 36.5px;
  border-radius: 50%;

  .headerSearchIcon {
    color: white;
    font-size: 26px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 30.5px;
    height: 30.5px;

    .headerSearchIcon {
      font-size: 22px;
    }
  }
`;

//------------------------------

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  .navbarItemBoz-popower {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    display: none;
  }
`;

export const NavbarItemBox = styled.div`
  cursor: pointer;

  a {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .keyboardArrowDownIcon {
    color: #fff;
  }

  &:hover {
    .keyboardArrowDownIcon {
      color: #27d0a5;
    }
  }

  &:hover {
    p {
      background: -webkit-linear-gradient(
        180deg,
        #27d0a5 15.63%,
        #029ecf 87.5%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const NavbarItem = styled.p`
  font-size: 1.6em;
  font-family: Mazzard;
  color: #fff;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`;

export const BurgerIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.xxl} {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
