import { styled } from "styled-components";

export const MainHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: #fff;

  max-width: 1151px;
  width: 100%;
  height: 91px;
  margin: 36px auto;
  padding: 0 20px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 100%;
    height: 69px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const MainHeaderLogo = styled.div`
  margin-bottom: -8px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    img {
      height: 99px;
    }
  }
`;

export const MainHeaderFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  position: relative;
`;

export const RequestBtn = styled.div`
  padding: 18px;
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

  margin-right: 75px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 12px;
    font-weight: 500;
    padding: 14px 12px;
    margin-right: 60px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const SearchInput = styled.div`
  padding: 3px;
  border-radius: 50px;
  border: 2px solid #029ecf;
  height: 56px;
  width: 56px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
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
    color: black;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover {
    transition: width 0.4s ease-in-out, background-color 0.4s ease-in-out,
      border-radius 0.4s ease-in-out;

    width: 220px;

    input {
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    height: 42px;
    width: 42px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const SearchIconBox = styled.div`
  background: linear-gradient(270deg, #029ecf 0%, #27d0a5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46.5px;
  height: 46.5px;
  border-radius: 50%;

  .headerSearchIcon {
    color: white;
    font-size: 26px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 32.5px;
    height: 32.5px;

    .headerSearchIcon {
      font-size: 18px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;
