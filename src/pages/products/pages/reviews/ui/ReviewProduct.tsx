import { FC } from "react";

import { ReviewProductWrapper } from "./reviewProductStyle";
import { CurdReview } from "../components";

const ReviewProduct: FC = () => {
  return (
    <ReviewProductWrapper>
      <CurdReview star={0} descriptions={""} />
    </ReviewProductWrapper>
  );
};

export default ReviewProduct;
