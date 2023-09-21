import { useRef } from "react";
import { banner, videoOfBannerForAbout } from "../../../../assets/images/about";
import {
  Banner,
  Container,
  Img,
  ShortInfoWrapper,
  Title,
  Text,
  CardAchievements,
} from "./ShortInfoStyles";
import CountUp from "react-countup";

const ShortInfo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoEnded = () => {
    // When the video ends, reset it to the beginning and play it again.
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <ShortInfoWrapper>
      <Container>
        <Title>About Our</Title>
        <Text>
          The standard webpage maximum width dimensions for desktop screens are
          1440 pixels. It's a common practice restrict the maxium width
          dimension for your site The standard webpage maximum width dimensions
          for desktop screens are 1440 pixels. It's a common practice restrict
          the maxium width dimension for your site The standard webpage maximum
          width dimensions for desktop screens are 1440 pixels. It's a common
          practice restrict the maxium width dimension for your site
        </Text>
        <Img src={banner} />
        <Text>
          The standard webpage maximum width dimensions for desktop screens are
          1440 pixels. It's a common practice restrict the maxium width
          dimension for your site The standard webpage maximum width dimensions
          for desktop screens are 1440 pixels. It's a common practice restrict
          the maxium width dimension for your site
        </Text>
      </Container>
      <Banner>
        <video
          src={videoOfBannerForAbout}
          ref={videoRef}
          onEnded={handleVideoEnded}
          autoPlay
          loop
        ></video>
        <div className="contentOfOurAchievements">
          <CardAchievements>
            <CountUp
              end={100}
              duration={5.75}
              start={0}
              separator="client"
              decimal=","
              suffix=" +"
              style={{ fontFamily: "MazzardH-Medium" }}
            />
            <p style={{ fontSize: "18px" }}>Best Products</p>
          </CardAchievements>

          <CardAchievements>
            <CountUp
              end={100}
              duration={5.75}
              start={0}
              separator="client"
              decimal=","
              suffix=" +"
              style={{ fontFamily: "MazzardH-Medium" }}
            />
            <p style={{ fontSize: "18px" }}>Best Products</p>
          </CardAchievements>

          <CardAchievements>
            <CountUp
              end={100}
              duration={5.75}
              start={0}
              separator="client"
              decimal=","
              suffix=" +"
              style={{ fontFamily: "MazzardH-Medium" }}
            />
            <p style={{ fontSize: "18px" }}>Best Products</p>
          </CardAchievements>

          <CardAchievements>
            <CountUp
              end={100}
              duration={5.75}
              start={0}
              separator="client"
              decimal=","
              suffix=" +"
              style={{ fontFamily: "MazzardH-Medium" }}
            />
            <p style={{ fontSize: "18px" }}>Best Products</p>
          </CardAchievements>
        </div>
      </Banner>
      <Container>
        <Text>
          The standard webpage maximum width dimensions for desktop screens are
          1440 pixels. It's a common practice restrict the maxium width
          dimension for your site The standard webpage maximum width dimensions
          for desktop screens are 1440 pixels. It's a common practice restrict
          the maxium width dimension for your site The standard webpage maximum
          width dimensions for desktop screens are 1440 pixels. It's a common
          practice restrict the maxium width dimension for your site The
          standard webpage maximum width dimensions for desktop screens are 1440
          pixels. It's a common practice restrict the maxium width dimension for
          your site The standard webpage maximum width dimensions for desktop
          screens are 1440 pixels. It's a common practice restrict the maxium
          width dimension for your site The standard webpage maximum width
          dimensions for desktop screens are 1440 pixels. It's a common practice
          restrict the maxium width dimension for your site the maxium width
          dimension for your site
        </Text>
      </Container>
    </ShortInfoWrapper>
  );
};

export default ShortInfo;
