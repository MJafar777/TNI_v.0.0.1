import { styled, keyframes } from "styled-components";

export const MainHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: #fff;

  width: 1151px;
  height: 91px;
  margin: 36px auto;
  padding: 0 20px;
`;

export const MainHeaderLogo = styled.div`
  margin-bottom: -8px;
`;

export const MainHeaderFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  position: relative;
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

  animation: ${colorCycle} 5s infinite alternate;

  margin-right: 75px;
`;

export const SearchInput = styled.div`
  padding: 3px;
  border-radius: 50px;
  border: 2px solid #029ecf;
  height: 56px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  position: absolute;
  right: 0;
  z-index: 2;
  overflow: hidden;
  transition: width 1s ease-in-out, background-color 1s ease-in-out,
    border-radius 1s ease-in-out;

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
    transition: width 1s ease-in-out, background-color 1s ease-in-out,
      border-radius 1s ease-in-out;

    width: 220px;

    input {
      opacity: 1;
    }
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
`;
