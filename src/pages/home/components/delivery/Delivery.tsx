import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import {
  CarOfDelivery,
  Card,
  CardContainer,
  CardImg,
  CardText,
  CardTitle,
  ContainerBottonOfDelivery,
  DeliveryWrapper,
  LeftImg,
  RightImg,
  Title,
  TopContentOfDelivery,
  TopTitle,
} from "./DeliveryStyles";

import {
  airPlane,
  deliveryCar,
  leftWorld,
  rightWorld,
  ship,
  track,
  train,
} from "../../../../assets/images/components/delivery";

const Delivery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <DeliveryWrapper>
      <TopContentOfDelivery>
        <TopTitle>
          <span></span> SERVICE <span></span>{" "}
        </TopTitle>
        <Title>Delivery</Title>
      </TopContentOfDelivery>

      <CardContainer>
        <Card data-aos-duration="1000" data-aos="fade-left">
          <CardImg
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            src={track}
          ></CardImg>
          <CardTitle>GROUND DELIVERY</CardTitle>
          <CardText>
            The standard webpage maximum width dimensions for desktop screens
            are 1440 pixels. It's a common practice restrict the maxium width
            dimension for your site
          </CardText>
        </Card>
        <Card data-aos-duration="1000" data-aos="fade-right">
          <CardImg
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            src={train}
          ></CardImg>
          <CardTitle>RAIN DELIVERY</CardTitle>
          <CardText>
            The standard webpage maximum width dimensions for desktop screens
            are 1440 pixels. It's a common practice restrict the maxium width
            dimension for your site
          </CardText>
        </Card>
        <div data-aos-duration="1000" data-aos="fade-up">
          <Card data-aos-duration="1000" data-aos="fade-left">
            <CardImg
              data-aos="zoom-in-left"
              data-aos-delay="500"
              data-aos-duration="2000"
              src={airPlane}
            ></CardImg>
            <CardTitle>AIR DELIVERY</CardTitle>
            <CardText>
              The standard webpage maximum width dimensions for desktop screens
              are 1440 pixels. It's a common practice restrict the maxium width
              dimension for your site
            </CardText>
          </Card>
        </div>
        <Card data-aos-duration="1000" data-aos="fade-right">
          <CardImg
            data-aos="zoom-in-left"
            data-aos-delay="500"
            data-aos-duration="2000"
            src={ship}
          ></CardImg>
          <CardTitle>SEA DELIVERY</CardTitle>
          <CardText>
            The standard webpage maximum width dimensions for desktop screens
            are 1440 pixels. It's a common practice restrict the maxium width
            dimension for your site
          </CardText>
        </Card>
      </CardContainer>

      <ContainerBottonOfDelivery>
        <LeftImg
          data-aos="fade-right"
          data-aos-duration="2000"
          src={leftWorld}
        ></LeftImg>
        <RightImg
          data-aos="fade-left"
          data-aos-duration="2000"
          src={rightWorld}
        ></RightImg>
        <CarOfDelivery
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="2000"
          src={deliveryCar}
        ></CarOfDelivery>
      </ContainerBottonOfDelivery>
    </DeliveryWrapper>
  );
};

export default Delivery;
