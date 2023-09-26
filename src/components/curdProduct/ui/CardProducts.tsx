import { FC } from "react";
import { Paragraph } from "../../Paragraph";
import { arrowRight, bgRactangle, buyCard } from "../../../assets/images";

import {
  ImgProduct,
  PriceAndBtn,
  ProductMain,
  TitleAndStar,
  BgImgProduct,
  CardProductsWrapper,
} from "./cardProducts";
import { BtnCurd } from "../../BtnCurd";
import { useButtonIsClickedStateContext } from "../../../context/useButtonIsClickedContext";

interface Props {
  img: string;
  price: string;
  id: number | string;
  productName: string;
  descriptions: string;
  star: string; // maximum star numbers "5"
  onClicks?: () => void;
}

const CardProducts: FC<Props> = (props) => {
  const { productName, descriptions, price, img, id, star } = props;

  const { setRequestOpenSecond } = useButtonIsClickedStateContext();

  return (
    <>
      <CardProductsWrapper key={id} onClick={props.onClicks}>
        <BgImgProduct bgRactangle={bgRactangle}>
          <ImgProduct src={img} alt={`this image not found ${img}`} />
        </BgImgProduct>

        <ProductMain>
          <TitleAndStar>
            <Paragraph
              width={""}
              margin={""}
              fontSize={"28"}
              color={"#000"}
              fontWeight={"700"}
              text={productName}
              textDecoration={""}
              lineHeight={"normal"}
              fontFamily={"Mazzard"}
              letterSpacing={"0.64px"}
            />
            {star}
          </TitleAndStar>

          <Paragraph
            margin={""}
            width={"275px"}
            fontSize={"14"}
            fontWeight={"400"}
            color={"#5F5F5F"}
            text={descriptions}
            lineHeight={"150%"}
            textDecoration={""}
            fontFamily={"Mazzard"}
            letterSpacing={"0.98px"}
          />

          <PriceAndBtn>
            <BtnCurd
              btnName={"Add to Cart"}
              iconHover={buyCard}
              iconDefault={arrowRight}
              id={""} // You can provide the actual ID here
              onClick={() => setRequestOpenSecond(true)}
            />

            <Paragraph
              width={""}
              margin={""}
              text={price}
              fontSize={"22"}
              color={"#000"}
              fontWeight={"700"}
              textDecoration={""}
              lineHeight={"normal"}
              fontFamily={"Mazzard"}
              letterSpacing={"0.44px"}
            />
          </PriceAndBtn>
        </ProductMain>
      </CardProductsWrapper>
    </>
  );
};

export default CardProducts;
