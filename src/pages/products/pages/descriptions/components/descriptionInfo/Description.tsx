import { FC } from "react";
import { DescriptionWrapper } from "./descriptionStyle";
import { BtnCurd } from "../../../../../../components/BtnCurd";
import { Paragraph } from "../../../../../../components/Paragraph";
import { arrowRight, buyCard } from "../../../../../../assets/images";
import { useButtonIsClickedStateContext } from "../../../../../../context/useButtonIsClickedContext";

interface Props {
  descriptionTextOne: string;
  descriptionTextTwo: string;
}

const Description: FC<Props> = (props) => {
  const { descriptionTextOne, descriptionTextTwo } = props;

  const { setRequestOpenSecond } = useButtonIsClickedStateContext();

  return (
    <DescriptionWrapper>
      <Paragraph
        text={descriptionTextOne}
        width={""}
        margin={""}
        fontSize={"16"}
        letterSpacing={""}
        fontWeight={"500"}
        color={"#46494F"}
        lineHeight={"150%"}
        textDecoration={""}
        fontFamily={"MazzardM-Medium"}
      />
      <Paragraph
        text={descriptionTextTwo}
        width={""}
        margin={""}
        fontSize={"16"}
        letterSpacing={""}
        fontWeight={"500"}
        color={"#46494F"}
        lineHeight={"150%"}
        textDecoration={""}
        fontFamily={"MazzardM-Medium"}
      />
      <BtnCurd
        id={""}
        iconHover={buyCard}
        btnName={"Add to Cart"}
        iconDefault={arrowRight}
        onClick={() => setRequestOpenSecond(true)}
      />
    </DescriptionWrapper>
  );
};

export default Description;
