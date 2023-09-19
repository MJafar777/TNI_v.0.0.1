import { FC, useState } from "react";
import { arrowRight, buyCard } from "../../../assets/images";
import { Img, BtnBuy, Circle, TextBtn, BtnRacktangle } from "./btn";

interface Props {
  icon: string;
  btnName: string;
  id: string | number;
  iconParent: boolean;
}

const BtnCurd: FC<Props> = (props) => {
  const [handleBtnCurd, setHandleBtnCurd] = useState(false);

  const { icon, iconParent, id, btnName } = props;
  return (
    <>
      <BtnBuy onClick={() => setHandleBtnCurd(() => !handleBtnCurd)}>
        <BtnRacktangle handleBtnCurd={handleBtnCurd}>
          <Circle handleBtnCurd={handleBtnCurd}>
            <Img
              src={
                iconParent === true && id
                  ? handleBtnCurd === true
                    ? buyCard
                    : arrowRight
                  : icon
              }
              alt={`this image not found ${icon}`}
            />
          </Circle>
          <TextBtn handleBtnCurd={handleBtnCurd}>{btnName}</TextBtn>
        </BtnRacktangle>
      </BtnBuy>
    </>
  );
};

export default BtnCurd;
