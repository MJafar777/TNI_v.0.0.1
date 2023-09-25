import { FC, useState } from "react";
import { Img, BtnBuy, Circle, TextBtn, BtnRacktangle } from "./btn";

interface Props {
  btnName: string;
  id: string | number;
  iconHover: string;
  iconDefault: string;
  onClick: () => void;
}

const BtnCurd: FC<Props> = (props) => {
  const [handleBtnCurd, setHandleBtnCurd] = useState(false);

  const { iconDefault, iconHover, btnName } = props;

  const handleMouseEnter = () => {
    setHandleBtnCurd(true);
  };

  const handleMouseLeave = () => {
    setHandleBtnCurd(false);
  };

  return (
    <>
      <BtnBuy
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          setHandleBtnCurd(() => !handleBtnCurd);
          e.stopPropagation();
          props.onClick();
        }}
      >
        <BtnRacktangle handleBtnCurd={handleBtnCurd}>
          <Circle handleBtnCurd={handleBtnCurd}>
            <Img
              src={
                handleBtnCurd == true
                  ? iconHover
                  : handleBtnCurd == false
                  ? iconDefault
                  : ""
              }
              alt={`this image not found ${iconDefault}`}
            />
          </Circle>
          <TextBtn handleBtnCurd={handleBtnCurd}>
            {handleBtnCurd ? btnName : btnName}
          </TextBtn>
        </BtnRacktangle>
      </BtnBuy>
    </>
  );
};

export default BtnCurd;
