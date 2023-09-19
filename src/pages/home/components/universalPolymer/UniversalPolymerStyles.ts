import { styled } from "styled-components";

export const UniversalPolymerWrapper = styled.section`
  position: relative;
  padding: 100px 0;
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
`;

export const UniversalPolymerLeft = styled.section`
  width: 50%;
  position: relative;
  padding-bottom: 80px;

  display: flex;
  justify-content: flex-end;

  .polymerBack2 {
    position: absolute;
    z-index: -1;
    right: 11px;
    bottom: 91px;
  }
`;

export const UniversalPolymerRight = styled.section`
  width: 50%;
`;

export const UniversalPolymerWelcome = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UniversalPolymerWelcomeRow = styled.div`
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);
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
`;

export const UniversalPolymerTitle = styled.section`
  color: #000;
  font-family: Mazzard;
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 1.12px;
`;

export const UniversalPolymerDesc = styled.section`
  color: #000;
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  line-height: 168.2%; /* 26.912px */
  letter-spacing: 1.12px;
  max-width: 480px;
  margin-bottom: 70px;
`;

export const UniversalPolymerTitleHerBox = styled.section`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
`;

export const UniversalPolymerTitleHerBoxTitle = styled.section`
  color: #000;
  font-family: Mazzard;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const UniversalPolymerTitleHerBoxDesc = styled.section`
  color: #000;
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
`;
