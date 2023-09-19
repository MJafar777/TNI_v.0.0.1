import { ourProductsBack } from "../../../../assets/images";
import { CardProducts } from "../../../../components/curdProduct";
import { Section } from "../../../../styles";
import {
  OurProductsCards,
  OurProductsDesc,
  OurProductsTitle,
  OurProductsWelcome,
  OurProductsWelcomeRow,
  OurProductsWelcomeText,
  OurProductsWrapper,
} from "./OurProductsStyles";

import dataCurd from "../../../../api/curds/cardsInfo";
import ButtonComp from "../../../../components/buttons/ButtonComp";

type DataType = {
  id: number;
  img: string;
  star: number; // maximum star numbers "5"
  price: string;
  productName: string;
  descriptions: string;
};

const OurProducts = () => {
  return (
    <Section>
      <OurProductsWrapper>
        <img
          src={ourProductsBack}
          alt="ourProductsBack"
          className="ourProductsBack"
        />

        <OurProductsWelcome>
          <OurProductsWelcomeRow />
          <OurProductsWelcomeText>Our Products</OurProductsWelcomeText>
          <OurProductsWelcomeRow />
        </OurProductsWelcome>

        <OurProductsTitle>Universal Polymer</OurProductsTitle>

        <OurProductsDesc>
          The standard webpage maximum width dimensions for desktop screens are
          1440 pixels. It's a common
        </OurProductsDesc>

        <OurProductsCards>
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
        </OurProductsCards>

        <div className="viewBtn">
          <ButtonComp buttonText={"View All Products"} />
        </div>
      </OurProductsWrapper>
    </Section>
  );
};

export default OurProducts;
