import React from "react";
import { Contact, HeaderTop } from "../../../components";
import dataCurd from "../../../api/curds/cardsInfo";
import { Paragraph } from "../../../components/Paragraph";
import { Container } from "../../../components/container";
import { MiniTitle } from "../../../components/miniTitle";
import { CardProducts } from "../../../components/curdProduct";
import { FilterProducts } from "../../../components/FilterProduct";
import {
  BrLine,
  GridsCards,
  FlexProduct,
  MarginBottom,
  ProductsWrapper,
} from "./products";
import { DescriptionProduct } from "../pages/descriptions";

const dataFilter = [
  { id: 1, value: "Polypropylenes" },
  { id: 2, value: "Polypropylenes" },
  { id: 3, value: "Polypropylenes" },
  { id: 4, value: "Polypropylenes" },
];

type DataType = {
  id: number;
  img: string;
  star: number; // maximum star numbers "5"
  price: string;
  productName: string;
  descriptions: string;
};

const Products: React.FC = () => {
  return (
    <>
      <HeaderTop TitleHeader={"Products"} SubTitleHeader={"Our Products"} />
      <Container>
        <ProductsWrapper>
          <MiniTitle textTitle={"Choose the product you need"} fontSize={56} />
          <FlexProduct>
            <Paragraph
              width={""}
              margin={""}
              fontSize={24}
              fontWeight={400}
              color={"#1A1E26"}
              lineHeight={"150%"}
              textDecoration={""}
              fontFamily={"Mazzard"}
              letterSpacing={"-0.5px"}
              text={"Filter by Interest"}
            />
            <FilterProducts marginTop={22} dataFilter={dataFilter} />
          </FlexProduct>

          <BrLine />
          <GridsCards>
            {dataCurd.map((e: DataType) => {
              return (
                <CardProducts
                  id={e.id}
                  key={e.id}
                  img={e.img}
                  star={e.star}
                  price={e.price}
                  productName={e.productName}
                  descriptions={e.descriptions}
                />
              );
            })}
          </GridsCards>

          <MarginBottom />

          <DescriptionProduct />
          <BrLine />

          <Paragraph
            width={""}
            fontSize={"24"}
            fontWeight={"400"}
            color={"#1A1E26"}
            lineHeight={"150%"}
            textDecoration={""}
            fontFamily={"Lexend"}
            letterSpacing={"-0.5px"}
            text={"Featured Product"}
            margin={"70px auto 50px auto"}
          />
          <GridsCards>
            {dataCurd.map((e: DataType) => {
              return e.id < 4 ? (
                <CardProducts
                  id={e.id}
                  key={e.id}
                  img={e.img}
                  star={e.star}
                  price={e.price}
                  productName={e.productName}
                  descriptions={e.descriptions}
                />
              ) : (
                ""
              );
            })}
          </GridsCards>

          <MarginBottom />

          <Contact />
        </ProductsWrapper>
      </Container>
    </>
  );
};

export default Products;
