import React from "react";
import { FilterProducts } from "../../../components/FilterProduct";
import { Paragraph } from "../../../components/Paragraph";
import { Container } from "../../../components/container";
import { CardProducts } from "../../../components/curdProduct";
import { MiniTitle } from "../../../components/miniTitle";
import { ProductsWrapper, FlexProduct, BrLine, GridsCards } from "./products";
import dataCurd from "../../../api/curds/cardsInfo";

const dataFilter = [
  { id: 1, value: "Polypropylenes" },
  { id: 2, value: "Polypropylenes" },
  { id: 3, value: "Polypropylenes" },
  { id: 4, value: "Polypropylenes" },
];

type DataType = {
  id: number;
  img: string;
  productName: string;
  star: number; // maximum star numbers "5"
  descriptions: string;
  price: string;
};

const Products: React.FC = () => {
  return (
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

        <BrLine />

        <Paragraph
          text={"Featured Product"}
          color={"#1A1E26"}
          width={""}
          margin={"70px auto 50px auto"}
          fontSize={"24"}
          fontFamily={"Lexend"}
          fontWeight={"400"}
          lineHeight={"150%"}
          letterSpacing={"-0.5px"}
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
      </ProductsWrapper>
    </Container>
  );
};

export default Products;
