import { FC, useState } from "react";
import { Img, BtnBuy, Circle, TextBtn, BtnRacktangle } from "./btn";

interface Props {
  btnName: string;
  id: string | number;
  iconHover: string;
  iconDefault: string;
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

  const BtnBuyHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <BtnBuy
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          setHandleBtnCurd(() => !handleBtnCurd);
          BtnBuyHandleClick;
          alert("Click");
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
            {handleBtnCurd ? "Add to Card" : btnName}
          </TextBtn>
        </BtnRacktangle>
      </BtnBuy>
    </>
  );
};

export default BtnCurd;
