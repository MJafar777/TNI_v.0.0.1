import { FC, useState } from "react";
import Description from "../descriptionInfo/Description";
import { BtnCurd } from "../../../../../../components/BtnCurd";
import { Container } from "../../../../../../components/container";
import { Paragraph } from "../../../../../../components/Paragraph";
import curdIndormation from "../../../../../../api/curds/cardsInfo";
import { arrowRight, buyCard } from "../../../../../../assets/images";

import {
  Hr,
  FlexBtns,
  PricePanel,
  MarginTopAndBottom,
  DescriptionProductRightWrapper,
} from "./descriptionProductRightStyle";
import { ReviewProduct } from "../../../reviews";
import { ButtonDecAndRev } from "../../../../components";

interface DescriptionProductRightProps {
  getIdCurd: number;
}

interface SelectedCurdType {
  id: number;
  img: string;
  star: string;
  price: string;
  productName: string;
  imgProduct: string[];
  descriptions: string;
  descriptionOne: string;
  descriptionTwo: string;
  review: number | string;
}

const DescriptionProductRight: FC<DescriptionProductRightProps> = (props) => {
  const { getIdCurd } = props;

  const selectedCurd: SelectedCurdType | undefined = curdIndormation.find(
    (curd) => curd.id === getIdCurd
  );

  const [changeSectionButton, setChangeSectionButton] = useState<boolean>(true);

  const [changeSectionButtonSecond, setChangeSectionButtonSecond] =
    useState<boolean>(false);
  selectedCurd?.descriptionOne;
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
          fontFamily={
            selectedCurd?.productName ? selectedCurd?.productName : ""
          }
        />

        <PricePanel>
          <Paragraph
            width={""}
            margin={""}
            fontSize={"16"}
            text={"$436.00"}
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
            letterSpacing={""}
            fontWeight={"600"}
            color={"#EB2606"}
            lineHeight={"150%"}
            textDecoration={""}
            fontFamily={"Lexend"}
            text={selectedCurd?.price ? selectedCurd?.price : ""}
          />

          <Paragraph
            width={""}
            margin={""}
            fontSize={"16"}
            text={`⭐ ${selectedCurd?.star.length}/5`}
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
            fontSize={"16"}
            letterSpacing={""}
            fontWeight={"400"}
            lineHeight={"150%"}
            textDecoration={""}
            color={"#060709"}
            fontFamily={"Lexend"}
            text={selectedCurd?.review ? selectedCurd?.review : "0"}
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
            descriptionTextOne={
              selectedCurd?.descriptionOne ? selectedCurd?.descriptionOne : ""
            }
            descriptionTextTwo={
              selectedCurd?.descriptionTwo ? selectedCurd?.descriptionTwo : ""
            }
          />
        ) : (
          <ReviewProduct />
          
        )}
      </DescriptionProductRightWrapper>
    </Container>
  );
};

export default DescriptionProductRight;
