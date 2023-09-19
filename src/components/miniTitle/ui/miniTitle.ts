import styled from "styled-components";

interface Props {
  fontSize: number | string;
}

export const MiniTitleWrapper = styled.p<Props>`
  font-size: ${(e) => (e.fontSize ? e.fontSize : 38)}px;

  color: #060709;
  font-weight: 700;
  line-height: 120%;
  font-style: normal;
  letter-spacing: 2px;
  font-family: Mazzard;
`;
