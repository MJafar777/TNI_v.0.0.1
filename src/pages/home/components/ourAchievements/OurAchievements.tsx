import CountUp from "react-countup";
import {
  AchievementsContainer,
  EachAchievement,
  EachAchievementsCardContent,
  EachAchievementsCardImg,
  EachAchievementsCardTitle,
  OurAchievementsWrapper,
} from "./OurAchievementsStyles";

import {
  Title,
  TopContentOfDelivery,
  TopTitle,
} from "../delivery/DeliveryStyles";

import {
  AchivementImg1,
  AchivementImg2,
  AchivementImg3,
  AchivementImg4,
} from "../../../../assets/images/components/achivements";

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
          <EachAchievementsCardTitle>
            {" "}
            <CountUp
              end={15}
              duration={5.75}
              start={0}
              separator="client"
              decimal=","
              suffix=" +"
              style={{ fontFamily: "MazzardH-Medium" }}
            />{" "}
          </EachAchievementsCardTitle>
          <EachAchievementsCardContent>
            TYPES OF PRODUCTS
          </EachAchievementsCardContent>
        </EachAchievement>

        <EachAchievement>
          <EachAchievementsCardImg
            src={AchivementImg2}
          ></EachAchievementsCardImg>
          <EachAchievementsCardTitle>
            <CountUp
              end={50}
              duration={5.75}
              start={0}
              separator="client"
              decimal=","
              suffix=" +"
              style={{ fontFamily: "MazzardH-Medium" }}
            />
          </EachAchievementsCardTitle>
          <EachAchievementsCardContent>
            LOCAL CUSTOMERS{" "}
          </EachAchievementsCardContent>
        </EachAchievement>

        <EachAchievement>
          <EachAchievementsCardImg
            src={AchivementImg3}
          ></EachAchievementsCardImg>
          <EachAchievementsCardTitle>
            {" "}
            <CountUp
              end={15}
              duration={5.75}
              start={0}
              separator="client"
              decimal=","
              suffix=" +"
              style={{ fontFamily: "MazzardH-Medium" }}
            />
          </EachAchievementsCardTitle>
          <EachAchievementsCardContent>
            COUNTRIES WE IMPORT FROM{" "}
          </EachAchievementsCardContent>
        </EachAchievement>

        <EachAchievement>
          <EachAchievementsCardImg
            src={AchivementImg4}
          ></EachAchievementsCardImg>
          <EachAchievementsCardTitle>
            {" "}
            <CountUp
              end={10}
              duration={5.75}
              start={0}
              separator="client"
              decimal=","
              suffix=" +"
              style={{ fontFamily: "MazzardH-Medium" }}
            />
          </EachAchievementsCardTitle>
          <EachAchievementsCardContent>
            INTERNATIONAL PARTNERS{" "}
          </EachAchievementsCardContent>
        </EachAchievement>
      </AchievementsContainer>
    </OurAchievementsWrapper>
  );
};

export default OurAchievements;
