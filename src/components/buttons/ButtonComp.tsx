import { linerArrow } from "../../assets/images";
import {
  ButtonCompItem,
  ButtonCompText,
  ButtonCompWrapper,
} from "./ButtonCompStyles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ButtonComp = () => {
  return (
    <ButtonCompWrapper>
      <ButtonCompText className="leftButtonCompText">Read More</ButtonCompText>

      <ButtonCompItem className="buttonCompItem">
        <ArrowForwardIcon className="buttonArrow" />

        <img className="linerArrow" src={linerArrow} alt="linerArrow" />
      </ButtonCompItem>

      <ButtonCompText className="rightButtonCompText">Read More</ButtonCompText>
    </ButtonCompWrapper>
  );
};

export default ButtonComp;
