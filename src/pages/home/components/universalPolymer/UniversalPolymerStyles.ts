import { styled } from "styled-components";

export const UniversalPolymerWrapper = styled.section`
  position: relative;

  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;

  .universalPolymerButtonComp {
    margin-top: 30px;
  }

  .section2Back {
    position: absolute;
    left: 0;
    top: -80px;
    z-index: -10;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;

    .universalPolymerButtonComp {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const UniversalPolymerLeft = styled.div`
  width: 50%;
  position: relative;
  padding-bottom: 80px;

  display: flex;
  justify-content: flex-end;

  .polymerBack {
    width: 96%;
  }

  .polymerBack2 {
    position: absolute;
    z-index: -1;
    right: 11px;
    bottom: 91px;
    width: 96%;
  }

  img {
    max-width: 525px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 60%;
    max-width: 400px;
    padding-bottom: 10px;

    .polymerBack2 {
      bottom: 21px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 70%;
    padding-bottom: 1px;

    .polymerBack2 {
      bottom: 11px;
    }
  }
`;

export const UniversalPolymerRight = styled.div`
  width: 50%;

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 90%;
  }
`;

export const UniversalPolymerWelcome = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 8px;
    justify-content: center;
    margin-bottom: 5px;
  }
`;

export const UniversalPolymerWelcomeRow = styled.div`
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 40px;
  }
`;

export const UniversalPolymerWelcomeText = styled.p`
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 4.24px;
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 3.18px;
  }
`;

export const UniversalPolymerTitle = styled.h2`
  color: #000;
  font-family: Mazzard;
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 1.12px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 5px;
  }
`;

export const UniversalPolymerDesc = styled.p`
  color: #000;
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  line-height: 168.2%; /* 26.912px */
  letter-spacing: 1.12px;
  max-width: 480px;
  margin-bottom: 50px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.184px;
    letter-spacing: 0.84px;
    margin-bottom: 5px;
    max-width: 100%;
  }
`;

export const UniversalPolymerTitleHerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 10px;

    img {
      width: 51px;
    }
  }
`;

export const UniversalPolymerTitleHerBoxTitle = styled.h3`
  color: #000;
  font-family: Mazzard;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const UniversalPolymerTitleHerBoxDesc = styled.p`
  color: #000;
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14px;
  }
`;
