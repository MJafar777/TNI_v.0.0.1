import { FC } from "react";
import { Container } from "../../../../../components/container";
import { DescriptionProductWrapper } from "./descriptionProductStyle";
import DescriptionProductLeft from "../components/descriptionProductLeft/DescriptionProductLeft";
import DescriptionProductRight from "../components/descriptionProductRight/DescriptionProductRight";

interface Props {}

const DescriptionProduct: FC<Props> = () => {
  return (
    <Container>
      <DescriptionProductWrapper>
        <DescriptionProductLeft />
        <DescriptionProductRight />
      </DescriptionProductWrapper>
    </Container>
  );
};

export default DescriptionProduct;
