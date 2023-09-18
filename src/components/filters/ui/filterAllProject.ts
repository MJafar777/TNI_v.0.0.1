import styled from "styled-components";
import { BreacPointsType } from "../../../../../../types/breacPointTypes";

export const FilterAllProjectsWrapper = styled.div<BreacPointsType>`
  width: 100%;
  height: 60px;
  display: flex;
  gap: 20px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 17px;
    height: 50px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: block;
    height: auto;
  }
`;
export const ButtonsFilter = styled.div<BreacPointsType>`
  display: flex;
  padding: 26px 0px 25px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  min-width: 111px;
  transition: all 0.3s linear;

  cursor: pointer;
  user-select: none;
  color: #9e9e9e;
  font-family: Archivo-Regular, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  overflow: hidden;
  position: relative;

  z-index: 20;

  &:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    padding: 20px 0px 19px 0px;
    min-width: 100px;
  }
`;
export const IconFilter = styled.img`
  width: 30px;
  margin-left: 95%;
  cursor: pointer;
  position: relative;
  top: -60px;

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
