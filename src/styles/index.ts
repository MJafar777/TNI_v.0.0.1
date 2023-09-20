import { styled } from "styled-components";

export const Section = styled.section`
  max-width: 1366px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 100%;
    max-width: 994px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;
