import { styled } from "styled-components";
import { mainBack } from "../../../../assets/images";

export const MainSectionWrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 793px;
  padding: 0 40px;

  display: flex;
  flex-direction: column;

  background-image: url(${mainBack});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${(props) => props.theme.breakpoints.xxl} {
    
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const MainSectionMain = styled.div`
  width: 100%;
`;

export const MainSectionLeft = styled.div`
  max-width: 1151px;
  width: 100%;
  padding: 20px;
  margin: 90px auto;
`;

export const MainSectionWelcome = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MainSectionWelcomeRow = styled.div`
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);
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
`;

export const MainSectionTitle = styled.h2`
  color: #fff;
  font-family: Mazzard;
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 1.12px;
`;

export const MainSectionSubTitle = styled.h3`
  color: #fff;
  font-family: Mazzard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 10.8px;
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
`;

export const MainSectionShare = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  position: absolute;
  top: 32%;
  left: 1%;
`;

export const MainSectionShareText = styled.div`
  transform: rotate(90deg);
  color: #fff;
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const MainSectionShareRow = styled.div`
  width: 1px;
  height: 80px;
  background-color: white;
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

    padding: 6px 5px 4px 5px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p.active-number {
    border: 2px solid #27d0a5;
    background-color: #333;
  }
`;
