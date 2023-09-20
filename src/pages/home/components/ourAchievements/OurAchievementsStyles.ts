import styled from "styled-components";

export const OurAchievementsWrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  margin-top: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AchievementsContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 90px;
  background: linear-gradient(180deg, #020918 0%, #252b42 97.56%);
  margin-top: 10px;
`;

export const EachAchievement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const EachAchievementsCardImg = styled.img``;

export const EachAchievementsCardTitle = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  padding: 10px;
  border-bottom: 2px white solid;
`;

export const EachAchievementsCardContent = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 168.2%; /* 30.276px */
  letter-spacing: 1.26px;
  text-align: center;
`;
