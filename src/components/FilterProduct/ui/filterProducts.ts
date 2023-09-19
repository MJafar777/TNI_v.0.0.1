import styled from "styled-components";

interface Props {
  marginTop: string | number;
}

export const FilterAllProjectsWrapper = styled.div<Props>`
  gap: 24px;
  height: 60px;
  display: flex;
  border-radius: 100px;

  margin-top: ${(e) => (e.marginTop ? e.marginTop : 10)}px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 17px;
    height: 50px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    height: auto;
    display: block;
  }
`;
export const ButtonsFilter = styled.div`
  gap: 24px;
  height: 48px;
  display: flex;
  padding: 8px 20px;
  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 100px;
  border: 1px solid #f4f4f4;

  transition: all 0.3s linear;

  background-clip: text;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  font-style: normal;
  font-family: Mazzard;

  cursor: pointer;

  user-select: none;
`;

export const IconFilter = styled.img`
  top: -60px;
  width: 30px;
  cursor: pointer;
  margin-left: 95%;
  position: relative;

  @media screen and (min-width: 993px) {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 25px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 93%;
  }
`;
