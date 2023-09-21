import styled from "styled-components";

interface Props {
  color: string;
  lineHeight: string;
  fontFamily: string;
  letterSpacing: string;
  width: number | string;
  textDecoration: string;
  margin: number | string;
  fontSize: number | string;
  fontWeight: string | number;
}

export const ParagraphWrapper = styled.p<Props>`
  margin: ${(e) => (e.margin ? e.margin : "")};
  width: ${(e) => (e.width ? e.width : "auto")};
  color: ${(e) => (e.color ? e.color : "#1A1E26")};
  font-size: ${(e) => (e.fontSize ? e.fontSize : "14")}px;
  font-family: ${(e) => (e.fontFamily ? e.fontFamily : "")};
  font-weight: ${(e) => (e.fontWeight ? e.fontWeight : "")};
  line-height: ${(e) => (e.lineHeight ? e.lineHeight : "")};
  letter-spacing: ${(e) => (e.letterSpacing ? e.letterSpacing : "")};
  text-decoration: ${(e) => (e.textDecoration ? e.textDecoration : "")};
`;
