import { banner } from "../../assets/images/about";
import {
  Banner,
  Container,
  Img,
  ShortInfoWrapper,
  Title,
  Text,
} from "./ShortInfoStyles";

const ShortInfo = () => {
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
      <Banner></Banner>
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
