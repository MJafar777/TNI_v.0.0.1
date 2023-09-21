import styled from "styled-components";

interface Props {
  BtnSelected: boolean;
}

export const ButtonDecAndRevWrapper = styled.div<Props>`
  width: 100%;
  height: 48px;
  max-width: 200px;

  padding: 1px;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  border-radius: 100px;

  background: linear-gradient(
    0deg,
    ${(e) => (e.BtnSelected ? "rgba(39, 208, 165, 1)" : "")} 0%,
    ${(e) => (e.BtnSelected ? "rgba(2, 158, 207, 1)" : "")} 100%
  );

  cursor: pointer;
  user-select: none;

  transition: all 0.2s ease-in-out !important;
`;

export const BgColor = styled.div<Props>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  border: ${(e) => (e.BtnSelected ? "" : "1px solid #f4f4f4")};
  background-color: ${(e) => (e.BtnSelected ? "#eafffa" : "#FFF")};

  transition: all 0.2s ease-in-out !important;
`;

export const ButtonDecAndRevChild = styled.div<Props>`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  font-style: normal;
  font-family: Lexend, sans-serif;

  background: linear-gradient(
    180deg,
    ${(e) => (e.BtnSelected ? "#27d0a5" : "#46494F")} 0%,
    ${(e) => (e.BtnSelected ? "#029ecf" : "#46494F")} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  transition: all 0.2s ease-in-out !important;
`;

export const Span = styled.span<Props>`
  color: #9d9ea2;

  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  font-style: normal;
  font-family: Lexend, sans-serif;

  transition: all 0.2s ease-in-out !important;
`;
