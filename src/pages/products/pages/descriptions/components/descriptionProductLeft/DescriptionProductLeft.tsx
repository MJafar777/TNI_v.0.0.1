import { FC } from "react";
import { Container } from "../../../../../../components/container";
import {
  sendLink,
  vectorImg,
  imgProductOne,
} from "../../../../../../assets/images";

import {
  BgPart,
  ImgMini,
  ChildBtns,
  ImgProduct,
  CHildPanels,
  RightBtnSend,
  SliderImages,
  LeftBtnVector,
  SliderBtnImages,
  DescriptionProductLeftWrapper,
} from "./descriptionProductLeftStyle";
import curdIndormation from "../../../../../../api/curds/cardsInfo";

interface Props {
  getIdCurd: number;
}

interface selectedCurdType {
  id: number;
  review: number | string;
  img: string;
  imgProduct: string[];
  productName: string;
  star: string;
  descriptions: string;
  descriptionOne: string;
  descriptionTwo: string;
  price: string;
}

const DescriptionProductLeft: FC<Props> = (props) => {
  const { getIdCurd } = props;

  const selectedCurd: selectedCurdType | undefined = curdIndormation.find(
    (curd) => curd.id === getIdCurd
  );
  console.log(selectedCurd);

  return (
    <Container>
      <DescriptionProductLeftWrapper>
        <BgPart>
          <ImgProduct
            src={imgProductOne}
            alt={`this image not found ${imgProductOne}`}
          />

          <CHildPanels>
            <ChildBtns>
              <LeftBtnVector
                src={vectorImg}
                alt={`this image not found ${vectorImg}`}
              />
            </ChildBtns>

            <ChildBtns>
              <RightBtnSend
                src={sendLink}
                alt={`this image not found ${sendLink}`}
              />
            </ChildBtns>
          </CHildPanels>
        </BgPart>

        <SliderImages>
          <SliderBtnImages>
            <ImgMini
              src={imgProductOne}
              alt={`this image not found ${imgProductOne}`}
            />
          </SliderBtnImages>

          <SliderBtnImages>
            <ImgMini
              src={imgProductOne}
              alt={`this image not found ${imgProductOne}`}
            />
          </SliderBtnImages>

          <SliderBtnImages>
            <ImgMini
              src={imgProductOne}
              alt={`this image not found ${imgProductOne}`}
            />
          </SliderBtnImages>

          <SliderBtnImages>
            <ImgMini
              src={imgProductOne}
              alt={`this image not found ${imgProductOne}`}
            />
          </SliderBtnImages>
        </SliderImages>
      </DescriptionProductLeftWrapper>
    </Container>
  );
};

export default DescriptionProductLeft;
