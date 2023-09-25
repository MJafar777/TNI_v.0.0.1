import styled from "styled-components";

export const DeliveryWrapper = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    overflow-x: hidden !important;
  }
`;

export const TopContentOfDelivery = styled.div``;

export const TopTitle = styled.div`
  font-family: "MazzardM-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.24px;
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 9px;
  text-align: center;

  span {
    width: 70px;
    height: 1px;
    background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);
  }
`;

export const Title = styled.div`
  color: var(--text-color, #252b42);
  text-align: center;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 57px; /* 142.5% */
  letter-spacing: 0.2px;

  @media screen and (max-width: 576px) {
    color: #252b42;
    text-align: center;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 42.354px; /* 151.263% */
    letter-spacing: 0.149px;
  }
`;

export const CardContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

export const Card = styled.div`
  width: 430px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36.856px;
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
  background: #fff;
  padding: 50px 53.5px 67px 53.5px;

  @media screen and (max-width: 576px) {
    width: 400px;
    /* height: 200px; */
  }
`;

export const CardImg = styled.img``;

export const CardTitle = styled.div`
  color: #000;
  font-family: Mazzard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.36px;
`;

export const CardText = styled.div`
  color: var(--second-text-color, #737373);
  text-align: center;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: 0.2px;
`;

export const ContainerBottonOfDelivery = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: end;
`;
export const LeftImg = styled.img`
  position: absolute;
  top: -20%;
  left: 8%;
  z-index: -1;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const RightImg = styled.img`
  position: absolute;
  top: -20%;
  right: 8%;
  z-index: -1;
  @media screen and (max-width: 1200px) {
    top: -20%;
    /* left: 20%; */
    z-index: -1;
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    top: -20%;
    left: 10%;
    z-index: -1;
  }
`;
export const CarOfDelivery = styled.img`
  margin-top: 128px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    width: 400px;
    height: 40vh;
    background-size: contain;
  }

  @media screen and (max-width: 576px) {
    width: 300px;
    height: 20vh;
  }
`;
