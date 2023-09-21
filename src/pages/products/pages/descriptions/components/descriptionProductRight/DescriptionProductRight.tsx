import { FC, useState } from "react";
import Description from "../descriptionInfo/Description";
import { BtnCurd } from "../../../../../../components/BtnCurd";
import { Container } from "../../../../../../components/container";
import { Paragraph } from "../../../../../../components/Paragraph";
import { arrowRight, buyCard } from "../../../../../../assets/images";

import {
  Hr,
  FlexBtns,
  PricePanel,
  MarginTopAndBottom,
  DescriptionProductRightWrapper,
} from "./descriptionProductRightStyle";
import { ButtonDecAndRev } from "../../../../components";
import { ReviewProduct } from "../../../reviews";

interface DescriptionProductRightProps {
  getIdCurd: number;
}

const descriptionTextOne =
  "The defibrillator/monitor is intended for use by a trained junior or mid-career healthcare professional, doctor, nurse or health care professional in emergency medical situations, both outdoors and indoors, including ambulances and aircraft, within specified environmental conditions. The modes of manual and automated external defibrillation, external pacing, and diagnostic electrocardiography are intended for use on adult and pediatric patients.";
const descriptionTextTwo =
  "The defibrillator/monitor is intended for use by a trained junior or mid-career healthcare professional, doctor, nurse or health care professional in emergency medical situations, both outdoors and indoors, including ambulances and aircraft, within specified environmental conditions. The modes of manual and automated external defibrillation, external pacing, and diagnostic electrocardiography are intended for use on adult and pediatric patients.";

const DescriptionProductRight: FC<DescriptionProductRightProps> = () => {
  const [changeSectionButton, setChangeSectionButton] = useState<boolean>(true);

  const [changeSectionButtonSecond, setChangeSectionButtonSecond] =
    useState<boolean>(false);

  return (
    <Container>
      <DescriptionProductRightWrapper>
        <Paragraph
          width={""}
          fontSize={"38"}
          fontWeight={"700"}
          color={"#060709"}
          lineHeight={"120%"}
          textDecoration={""}
          text={"Monitor D500"}
          letterSpacing={"2px"}
          margin={"0 0 15px 0"}
          fontFamily={"Mazzard"}
        />

        <PricePanel>
          <Paragraph
            width={""}
            margin={""}
            fontSize={"16"}
            text={"$200.00"}
            fontWeight={"400"}
            letterSpacing={""}
            color={"#9D9EA2"}
            lineHeight={"150%"}
            fontFamily={"Lexend"}
            textDecoration={"line-through"}
          />

          <Paragraph
            width={""}
            margin={""}
            fontSize={"16"}
            text={"$120.00"}
            letterSpacing={""}
            fontWeight={"600"}
            color={"#EB2606"}
            lineHeight={"150%"}
            textDecoration={""}
            fontFamily={"Lexend"}
          />

          <Paragraph
            width={""}
            margin={""}
            fontSize={"16"}
            text={"⭐ 4.6/5"}
            letterSpacing={""}
            fontWeight={"400"}
            color={"#060709"}
            lineHeight={"150%"}
            textDecoration={""}
            fontFamily={"Lexend"}
          />
          <span>|</span>

          <Paragraph
            width={""}
            margin={""}
            text={"135"}
            fontSize={"16"}
            letterSpacing={""}
            fontWeight={"400"}
            lineHeight={"150%"}
            textDecoration={""}
            color={"#060709"}
            fontFamily={"Lexend"}
          />

          <Paragraph
            width={""}
            margin={""}
            fontSize={"14"}
            text={"Reviews"}
            fontWeight={"400"}
            letterSpacing={""}
            color={"#9D9EA2"}
            textDecoration={""}
            lineHeight={"150%"}
            fontFamily={"Lexend"}
          />

          <BtnCurd
            id={""}
            iconHover={buyCard}
            btnName={"Add to Cart"}
            iconDefault={arrowRight}
          />
        </PricePanel>

        <MarginTopAndBottom />

        <FlexBtns>
          <ButtonDecAndRev
            text={"Description"}
            BtnSelected={changeSectionButton}
            onClick={() => {
              setChangeSectionButton(true);
              setChangeSectionButtonSecond(false);
            }}
          />

          <ButtonDecAndRev
            text={"Reviews"}
            subText={"(350)"}
            BtnSelected={changeSectionButtonSecond}
            onClick={() => {
              setChangeSectionButton(false);
              setChangeSectionButtonSecond(true);
            }}
          />
        </FlexBtns>

        <Hr />

        {changeSectionButton ? (
          <Description
            descriptionTextOne={descriptionTextOne}
            descriptionTextTwo={descriptionTextTwo}
          />
        ) : (
          <ReviewProduct />
        )}
      </DescriptionProductRightWrapper>
    </Container>
  );
};

export default DescriptionProductRight;
