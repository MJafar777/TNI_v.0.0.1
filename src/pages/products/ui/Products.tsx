import React, { useState } from "react";
import dataCurd from "../../../api/curds/cardsInfo";
import { Contact, HeaderTop } from "../../../components";

import { Paragraph } from "../../../components/Paragraph";
import { Container } from "../../../components/container";
import { MiniTitle } from "../../../components/miniTitle";
import { DescriptionProduct } from "../pages/descriptions";
import { CardProducts } from "../../../components/curdProduct";
import { FilterProducts } from "../../../components/FilterProduct";

import {
  BrLine,
  GridsCards,
  FlexProduct,
  MarginBottom,
  RemoveContain,
  ProductsWrapper,
} from "./products";
import RequestContactClone from "../components/requestContactClone/RequestContact";

const dataFilter = [
  { id: 1, value: "Polypropylenes" },
  { id: 2, value: "Polypropylenes" },
  { id: 3, value: "Polypropylenes" },
  { id: 4, value: "Polypropylenes" },
];

type DataType = {
  id: number;
  img: string;
  star: string; // maximum star numbers "5"
  price: string;
  productName: string;
  descriptions: string;
  imgProduct: string[];
  descriptionOne: string;
  descriptionTwo: string;
  review: string | number;
};

const Products: React.FC = () => {
  const [removeContain, setRemoveContain] = useState<boolean>(false);
  const [getIdCurd, setGetIdCurd] = useState<number>(1);

  return (
    <>
      <HeaderTop TitleHeader={"Products"} SubTitleHeader={"Our Products"} />

      <RequestContactClone />

      <Container>
        <ProductsWrapper>
          {removeContain ? (
            <DescriptionProduct getIdCurd={getIdCurd} />
          ) : (
            <RemoveContain>
              <MiniTitle
                textTitle={"Choose the product you need"}
                fontSize={56}
              />

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
                      onClicks={() => {
                        setGetIdCurd(e.id);
                        setRemoveContain(!removeContain);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
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
            </RemoveContain>
          )}

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
                  onClicks={() => {
                    setGetIdCurd(e.id);
                    setRemoveContain(
                      !removeContain ? !removeContain : removeContain
                    );
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
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
