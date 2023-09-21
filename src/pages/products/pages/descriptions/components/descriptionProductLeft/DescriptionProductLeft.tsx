import { FC, useState } from "react";
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

  const [defaultImage, setDefaultImage] = useState({
    img: selectedCurd?.imgProduct[0],
    id: 1,
  });

  return (
    <Container>
      <DescriptionProductLeftWrapper>
        <BgPart>
          <ImgProduct
            src={defaultImage?.img ? defaultImage.img : ""}
            alt={`this image not found ${
              defaultImage?.img ? defaultImage.img : ""
            }`}
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
          {selectedCurd?.imgProduct.map((productImage, index) => (
            <SliderBtnImages
              onClick={() =>
                setDefaultImage({ img: productImage, id: index + 1 })
              }
              key={index}
            >
              <ImgMini
                src={productImage}
                alt={`this image not found ${productImage}`}
              />
            </SliderBtnImages>
          ))}
        </SliderImages>
      </DescriptionProductLeftWrapper>
    </Container>
  );
};

export default DescriptionProductLeft;
