import {
  Title,
  TopContentOfDelivery,
  TopTitle,
} from "../delivery/DeliveryStyles";

import {
  AchievementsContainer,
  EachAchievement,
  EachAchievementsCardContent,
  EachAchievementsCardImg,
  EachAchievementsCardTitle,
  OurAchievementsWrapper,
} from "./OurAchievementsStyles";

const OurAchievements = () => {

  return (
    <OurAchievementsWrapper>
      <TopContentOfDelivery>
        <TopTitle>
          {" "}
          <span></span> TRUE FACTS <span></span>
        </TopTitle>
        <Title>THE FACTS SPEAKS FOR THEMSELVES</Title>
      </TopContentOfDelivery>

      <AchievementsContainer>
        <EachAchievement>
          <EachAchievementsCardImg></EachAchievementsCardImg>
          <EachAchievementsCardTitle></EachAchievementsCardTitle>
          <EachAchievementsCardContent></EachAchievementsCardContent>
        </EachAchievement>
      </AchievementsContainer>
    </OurAchievementsWrapper>
  );
};

export default OurAchievements;
