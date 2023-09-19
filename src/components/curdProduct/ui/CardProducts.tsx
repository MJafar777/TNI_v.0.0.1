import { FC } from "react";

import { Paragraph } from "../../Paragraph";

import { arrowRight, bgRactangle } from "../../../assets/images";

import {
  ImgProduct,
  PriceAndBtn,
  ProductMain,
  TitleAndStar,
  BgImgProduct,
  CardProductsWrapper,
} from "./cardProducts";

import { BtnCurd } from "../../BtnCurd";

interface Props {
  img: string;
  price: string;
  id: number | string;
  productName: string;
  descriptions: string;
  star: number; // maximum star numbers "5"
}

const CardProducts: FC<Props> = (props) => {
  const { productName, descriptions, price, img, id } = props;
  return (
    <CardProductsWrapper>
      <BgImgProduct bgRactangle={bgRactangle}>
        <ImgProduct src={img} alt={`this image not found ${img}`} />
      </BgImgProduct>

      <ProductMain>
        <TitleAndStar>
          <Paragraph
            width={""}
            margin={""}
            fontSize={"32"}
            color={"#000"}
            fontWeight={"700"}
            text={productName}
            lineHeight={"normal"}
            fontFamily={"Mazzard"}
            letterSpacing={"0.64px"}
          />
          ⭐⭐⭐⭐⭐
        </TitleAndStar>
        <Paragraph
          margin={""}
          width={"275px"}
          fontSize={"14"}
          fontWeight={"400"}
          color={"#5F5F5F"}
          text={descriptions}
          lineHeight={"150%"}
          fontFamily={"Mazzard"}
          letterSpacing={"0.98px"}
        />

        <PriceAndBtn>
          <BtnCurd
            id={id}
            iconParent={true}
            icon={arrowRight}
            btnName={"Add to Cart"}
          />

          <Paragraph
            width={""}
            margin={""}
            text={price}
            fontSize={"22"}
            color={"#000"}
            fontWeight={"700"}
            lineHeight={"normal"}
            fontFamily={"Mazzard"}
            letterSpacing={"0.44px"}
          />
        </PriceAndBtn>
      </ProductMain>
    </CardProductsWrapper>
  );
};

export default CardProducts;
