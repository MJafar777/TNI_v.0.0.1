import styled, { keyframes } from "styled-components";
import { mainBack } from "../../../../assets/images";

// Animatsiya keyframes
const slideAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const MainSectionWrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 793px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  /* background-image: url(${mainBack}); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: ${slideAnimation} 1s ease-in-out;
  animation-fill-mode: forwards;

  &:hover {
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    height: auto;
    min-height: 430px;
    padding: 0 10px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    min-height: 330px;
  }
`;

export const MainSectionMain = styled.div`
  width: 100%;
`;

export const MainSectionLeft = styled.div`
  width: 100%;
  padding: 20px 0;
  margin: 90px auto;
  display: flex;
  gap: 20px;

  .requestBtn {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    padding: 10px 0;
    margin: 30px auto;
    gap: 10px;
    padding-bottom: 60px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    padding: 10px 0;
    margin: 10px auto;
    gap: 10px;
    padding-bottom: 30px;
    text-align: center;
    width: auto;

    .buttonComp {
      margin: 40px;
      display: flex;
      justify-content: center;
    }

    .buttonCompButton {
      display: none;
    }

    .requestBtn {
      display: flex;
    }
  }
`;

export const MainSectionWelcome = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 8px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const MainSectionWelcomeRow = styled.div`
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 40px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const MainSectionWelcomeText = styled.p`
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 4.24px;
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 3.18px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const MainSectionTitle = styled.h2`
  color: #fff;
  font-family: Mazzard;
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 1.12px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 0.76px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const MainSectionSubTitle = styled.h3`
  color: #fff;
  font-family: Mazzard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 10.8px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 7.2px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 16px;
  }
`;

export const MainSectionDesc = styled.p`
  color: #fff;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 480px;
  margin: 21px 0 35px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14px;
    font-weight: 400;
    max-width: 400px;
    margin: 16px 0 30px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`;

export const MainSectionShare = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 14px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`;

export const MainSectionShareText = styled.div`
  transform: rotate(90deg);
  color: #fff;
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14px;
    font-weight: 400;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const MainSectionShareRow = styled.div`
  width: 1px;
  height: 80px;
  background-color: white;

  @media ${(props) => props.theme.breakpoints.xxl} {
    height: 57px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const MainSectionShareItem = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #fff;

  cursor: pointer;

  &:hover {
    border: 2px solid #27d0a5;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 30px;
    height: 30px;
    border: 1px solid #fff;

    img {
      transform: scale(0.7);
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const MainSectionNumbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 58px;
  height: 158px;
  flex-shrink: 0;
  border-radius: 27px;
  background: rgba(2, 15, 32, 0.8);
  padding: 14px 0;
  position: absolute;
  right: 20px;
  top: 35%;

  p {
    color: #fff;
    font-family: Mazzard;
    font-size: 16px;
    font-weight: 400;

    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p.active-number {
    border: 2px solid #27d0a5;
    background-color: #333;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 35px;
    height: 100px;
    top: 40%;

    p {
      font-size: 12px;
      font-weight: 400;

      padding: 5px 4px 3px 4px;
    }

    p.active-number {
      border: 1px solid #27d0a5;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`;
