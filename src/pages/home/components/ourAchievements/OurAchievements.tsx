import { AchivementImg1, AchivementImg2, AchivementImg3, AchivementImg4 } from "../../../../assets/images/components/achivements";
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
          <EachAchievementsCardImg
            src={AchivementImg1}
          ></EachAchievementsCardImg>
          <EachAchievementsCardTitle>15+</EachAchievementsCardTitle>
          <EachAchievementsCardContent>
            TYPES OF PRODUCTS
          </EachAchievementsCardContent>
        </EachAchievement>

        <EachAchievement>
          <EachAchievementsCardImg
            src={AchivementImg2}
          ></EachAchievementsCardImg>
          <EachAchievementsCardTitle>50+</EachAchievementsCardTitle>
          <EachAchievementsCardContent>
            LOCAL CUSTOMERS{" "}
          </EachAchievementsCardContent>
        </EachAchievement>

        <EachAchievement>
          <EachAchievementsCardImg
            src={AchivementImg3}
          ></EachAchievementsCardImg>
          <EachAchievementsCardTitle>5+</EachAchievementsCardTitle>
          <EachAchievementsCardContent>
            COUNTRIES WE IMPORT FROM{" "}
          </EachAchievementsCardContent>
        </EachAchievement>

        <EachAchievement>
          <EachAchievementsCardImg
            src={AchivementImg4}
          ></EachAchievementsCardImg>
          <EachAchievementsCardTitle>10+</EachAchievementsCardTitle>
          <EachAchievementsCardContent>
            INTERNATIONAL PARTNERS{" "}
          </EachAchievementsCardContent>
        </EachAchievement>
      </AchievementsContainer>
    </OurAchievementsWrapper>
  );
};

export default OurAchievements;