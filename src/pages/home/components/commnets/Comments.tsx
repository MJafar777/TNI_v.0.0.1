import {
  Title,
  TopContentOfDelivery,
  TopTitle,
} from "../delivery/DeliveryStyles";
import { Subtitle } from "./CommnetsStyles";
import { CommentsWrapper } from "./CommnetsStyles";

const Comments = () => {
  return (
    <CommentsWrapper>
      <TopContentOfDelivery>
        <TopTitle>
          {" "}
          <span></span>Our Testimonials <span></span>{" "}
        </TopTitle>
        <Title>Our Customer Says About Us</Title>
        <Subtitle>
          The standard webpage maximum width dimensions for desktop screens are
          1440 pixels. It's a common
        </Subtitle>
      </TopContentOfDelivery>
    </CommentsWrapper>
  );
};

export default Comments;