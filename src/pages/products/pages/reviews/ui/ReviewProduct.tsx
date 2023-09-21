import { FC } from "react";
import { CurdReview } from "../components";
import {
  Hr,
  Sup,
  Button,
  SendMessage,
  WrapperTextarea,
  ReviewProductWrapper,
  FlexDescriptionCreate,
} from "./reviewProductStyle";
import { ParagraphTitle } from "./ParagraphTitle";
import { Paragraph } from "../../../../../components/Paragraph";

import * as React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const ReviewProduct: FC = () => {
  const [, setHover] = React.useState(-1);
  const [value, setValue] = React.useState<number | null>(0);

  const labels: { [index: string]: string } = {
    0.5: "",
    1: "",
    1.5: "",
    2: "",
    2.5: "",
    3: "",
    3.5: "",
    4: "",
    4.5: "",
    5: "",
  };

  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <ReviewProductWrapper>
      <CurdReview star={4} descriptions={""} />
      <CurdReview star={5} descriptions={""} />
      <CurdReview star={4} descriptions={""} />

      <Button>Show More</Button>

      <Hr />

      <Paragraph
        width={""}
        margin={""}
        fontSize={"18"}
        fontWeight={"400"}
        letterSpacing={""}
        color={"#060709"}
        textDecoration={""}
        lineHeight={"150%"}
        text={"Add A Review"}
        fontFamily={"Lexend , sans-serif"}
      />

      <FlexDescriptionCreate>
        <Paragraph
          width={""}
          margin={""}
          fontSize={"14"}
          fontWeight={"400"}
          letterSpacing={""}
          color={"#46494F"}
          lineHeight={"150%"}
          textDecoration={""}
          text={"Your rating : "}
          fontFamily={"Lexend , sans-serif"}
        />

        <Rating
          value={value}
          precision={1}
          name="hover-feedback"
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </FlexDescriptionCreate>

      <ParagraphTitle>
        Your Review <Sup>*</Sup>
      </ParagraphTitle>

      <WrapperTextarea>
        <textarea
          placeholder="Enter your review"
          name="message"
          id=""
        ></textarea>
      </WrapperTextarea>

      <SendMessage>Submit</SendMessage>
    </ReviewProductWrapper>
  );
};

export default ReviewProduct;
