import { FC, useState } from "react";

import { Img, BtnBuy, Circle, TextBtn, BtnRacktangle } from "./btn";
import { arrowRight, buyCard } from "../../../assets/images";

interface Props {
  id: string | number;
  icon: string;
  iconParent: boolean;
  btnName: string;
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
