import { styled } from "styled-components";

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
    color: #1e1e1e;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
  color: #1e1e1e;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-family: Mazzard;
    font-size: 12px;
    font-weight: 500;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`;
