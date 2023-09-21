import { styled } from "styled-components";

export const OurProductsWrapper = styled.section`
  margin: 0 auto;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 50px;

  .ourProductsBack {
    position: absolute;
    left: 0;
    top: -150px;
    z-index: -10;
  }

  .viewBtn {
    margin: 40px auto;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    .viewBtn {
      margin: 20px auto;
    }
  }
`;

export const OurProductsWelcome = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 8px;
  }
`;

export const OurProductsWelcomeRow = styled.div`
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const OurProductsWelcomeText = styled.p`
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
    margin-bottom: 5px;
  }
`;

export const OurProductsTitle = styled.h2`
  color: #000;
  font-family: Mazzard;
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 1.12px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 0.76px;
  }
`;

export const OurProductsDesc = styled.p`
  color: #000;
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  line-height: 168.2%; /* 26.912px */
  letter-spacing: 1.12px;
  max-width: 720px;
  margin: 15px auto;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.84px;
    margin: 5px auto;
  }
`;

export const OurProductsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  align-items: center;
  margin: 20px auto;
  max-width: 1100px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.xxl} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: auto;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: 1fr;
    align-items: center;
    width: auto;
    gap: 20px;
  }
`;
