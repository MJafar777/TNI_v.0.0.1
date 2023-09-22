import { styled } from "styled-components";

export const HomePageContainer = styled.div`
  .mobileRow {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    .mobileRow {
      display: inline-block;
    }
  }
`;
