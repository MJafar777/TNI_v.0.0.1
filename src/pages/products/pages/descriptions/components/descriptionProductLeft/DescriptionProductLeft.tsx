import { FC, useEffect, useState } from "react";
import { Container } from "../../../../../../components/container";
import curdInformation from "../../../../../../api/curds/cardsInfo";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  sendLink,
  vectorImg,
  // imgProductOne,
} from "../../../../../../assets/images";

import {
  BgPart,
  ImgMini,
  LeftBtn,
  RightBtn,
  ChildBtns,
  ImgProduct,
  CHildPanels,
  RightBtnSend,
  SliderImages,
  LeftBtnVector,
  SliderBtnImages,
  DescriptionProductLeftWrapper,
} from "./descriptionProductLeftStyle";

interface Props {
  getIdCurd: number;
}

interface SelectedCurdType {
  id: number;
  img: string;
  star: string;
  price: string;
  productName: string;
  imgProduct: string[];
  descriptions: string;
  descriptionOne: string;
  descriptionTwo: string;
  review: number | string;
}

const DescriptionProductLeft: FC<Props> = (props) => {
  const { getIdCurd } = props;

  const selectedCurd: SelectedCurdType | undefined = curdInformation.find(
    (curd) => curd.id === getIdCurd
  );

  const [defaultImage, setDefaultImage] = useState<{
    img: string | undefined;
    id: number;
  }>({
    img: selectedCurd?.imgProduct[0],
    id: 1,
  });

  let imageAsosiy = defaultImage.img;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    imageAsosiy = selectedCurd?.img;
    setDefaultImage({
      img: selectedCurd?.imgProduct[0],
      id: selectedCurd?.id || 1,
    });
  }, [getIdCurd]);

  const [handleZoom, setHandleZoom] = useState(false);

  const handleZoomImage = () => {
    setHandleZoom(true);
  };

  return (
    <Container>
      {handleZoom && (
        <HandleZoomImage
          onClick={() => setHandleZoom(false)}
          defaultImage={defaultImage || { img: "", id: 1 }}
        />
      )}
      <DescriptionProductLeftWrapper>
        <BgPart style={handleZoom ? { display: "none" } : {}}>
          <ImgProduct
            src={imageAsosiy ? `${imageAsosiy}` : ""}
            alt={`this image not found ${defaultImage.img || ""}`}
          />

          <CHildPanels>
            <ChildBtns onClick={handleZoomImage}>
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

interface HandleZoomImageProps {
  onClick: () => void;
  defaultImage: { img: string | undefined; id: number };
}

const HandleZoomImage: FC<HandleZoomImageProps> = (props) => {
  const { defaultImage } = props;

  if (defaultImage && defaultImage.img) {
    return (
      <div
        style={{
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: 100,
          borderRadius: 0,
          position: "fixed",
          width: "100% !important",
          height: "100vh !important",
          backgroundColor: "rgba(0, 0, 0, 0.7)",

          gap: "5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          userSelect: "none",
        }}
        onClick={() => props.onClick()}
      >
        <LeftBtn
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ArrowBackIosNewIcon sx={{ color: "#fff", fontSize: "48px" }} />
        </LeftBtn>

        <ImgProduct
          src={defaultImage.img}
          onClick={(e) => e.stopPropagation()}
          alt={`this image not found ${defaultImage.img}`}
        />

        <RightBtn onClick={(e) => e.stopPropagation()}>
          <ArrowForwardIosIcon sx={{ color: "#fff", fontSize: "48px" }} />
        </RightBtn>
      </div>
    );
  }

  return null;
};
