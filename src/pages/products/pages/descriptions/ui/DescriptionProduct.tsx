import { FC } from "react";
import { Container } from "../../../../../components/container";
import { DescriptionProductWrapper } from "./descriptionProductStyle";
import DescriptionProductLeft from "../components/descriptionProductLeft/DescriptionProductLeft";
import DescriptionProductRight from "../components/descriptionProductRight/DescriptionProductRight";

interface Props {
  getIdCurd: number;
}

const DescriptionProduct: FC<Props> = (props) => {
  const { getIdCurd } = props;

  return (
    <Container>
      <DescriptionProductWrapper>
        <DescriptionProductLeft getIdCurd={getIdCurd} />
        <DescriptionProductRight getIdCurd={getIdCurd} />
      </DescriptionProductWrapper>
    </Container>
  );
};

export default DescriptionProduct;
