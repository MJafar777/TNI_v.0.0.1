import styled from "styled-components";

export const OneCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  gap: 28px;
  margin-top: 30px;
  .slick-slide {
    max-width: 342px;
    height: 250px;
    border: red 2px solid !important;
  }

  .slick-slide {
    width: 342px;
    height: 250px;
  }
`;

export const ContainerOfContent = styled.div`
  border: 2px solid #27d0a5;
  border-radius: 15px;
  width: 342px;
  height: 250px;
  padding: 12px 0;
  gap: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12%;
  color: #fe9e03;
`;

export const ContentOfComment = styled.div`
  padding: 0 12%;
  color: #000;
  text-align: center;
  font-family: "MazzardM-LigthItalic";
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 96.5%; /* 15.44px */
  letter-spacing: 1.12px;
`;

export const Img = styled.img`
  position: absolute;
  top: -8%;
  left: 5%;
`;

export const Img2 = styled.img`
  position: absolute;
  bottom: -9%;
  left: 10%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserImg = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: #029ecf 2px solid;
  img {
    width: 65px;
    position: absolute;
    top: -8%;
    left: -2%;
  }
`;

export const UserName = styled.div`
  font-family: "MazzardM-Bold";
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const UserTitle = styled.div`
  color: #000;
  font-family: "MazzardM-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
