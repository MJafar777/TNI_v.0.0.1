import { FC } from "react";

interface Props {
  star: number;
  descriptions: string;
}
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import {
  // Logo,
  TopProfile,
  CurdReviewWrapper,
} from "./curdReviewStyle";
import { Paragraph } from "../../../../../../components/Paragraph";

const CurdReview: FC<Props> = () => {
  // const { star, descriptions } = props;

  return (
    <CurdReviewWrapper>
      <TopProfile>
        {/* <Logo src={""} alt={"logo"} /> */}
        <AccountCircleSharpIcon color="action" />
        <Paragraph
          width={""}
          margin={""}
          text={"Alex"}
          fontSize={"16"}
          fontWeight={"500"}
          letterSpacing={""}
          color={"#1a1e26"}
          lineHeight={"150%"}
          textDecoration={""}
          fontFamily={"Lexend, sans-serif"}
        />
        |
        <Paragraph
          width={""}
          margin={""}
          fontSize={"14"}
          fontWeight={"300"}
          letterSpacing={""}
          color={"#9d9ea2"}
          lineHeight={"150%"}
          textDecoration={""}
          text={"January 15, 2023"}
          fontFamily={"Lexend , sans-serif"}
        />
      </TopProfile>
      ⭐⭐⭐⭐⭐
      <Paragraph
        text={UserTextReview}
        width={"100%"}
        fontSize={"16"}
        letterSpacing={""}
        fontWeight={"400"}
        color={"#1A1E26"}
        lineHeight={"150%"}
        textDecoration={""}
        margin={"0 0 0 0"}
        fontFamily={"Lexend , sans-serif"}
      />
    </CurdReviewWrapper>
  );
};

export default CurdReview;

const UserTextReview =
  "Absolutely love TNI Asia; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their needs.";
