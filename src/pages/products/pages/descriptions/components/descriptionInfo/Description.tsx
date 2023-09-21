import { FC } from "react";
import { DescriptionWrapper } from "./descriptionStyle";
import { Paragraph } from "../../../../../../components/Paragraph";

interface Props {
  descriptionTextOne: string;
  descriptionTextTwo: string;
}

const Description: FC<Props> = (props) => {
  const { descriptionTextOne, descriptionTextTwo } = props;
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
        fontFamily={"Mazzard"}
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
        fontFamily={"Mazzard"}
      />
    </DescriptionWrapper>
  );
};

export default Description;
