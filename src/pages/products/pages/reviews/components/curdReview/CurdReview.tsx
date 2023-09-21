import { FC } from "react";

interface Props {
  star: number;
  descriptions: string;
}

import {
  CurdReviewWrapper,
  TopProfile,
  Logo,
  NameUser,
  DateSendMessage,
} from "./curdReviewStyle";

const CurdReview: FC<Props> = (props) => {
  const { star, descriptions } = props;

  return (
    <CurdReviewWrapper>
      <TopProfile>
        <Logo />
        <NameUser>Alex</NameUser>|
        <DateSendMessage>January 15, 2023</DateSendMessage>
      </TopProfile>
    </CurdReviewWrapper>
  );
};

export default CurdReview;
