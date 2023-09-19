import { linerArrow } from "../../assets/images";
import {
  ButtonCompItem,
  ButtonCompText,
  ButtonCompWrapper,
} from "./ButtonCompStyles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ButtonCompProps {
  buttonText: string;
}

const ButtonComp: React.FC<ButtonCompProps> = ({ buttonText }) => {
  return (
    <ButtonCompWrapper>
      <ButtonCompText className="leftButtonCompText">
        {buttonText}
      </ButtonCompText>

      <ButtonCompItem className="buttonCompItem">
        <ArrowForwardIcon className="buttonArrow" />

        <img className="linerArrow" src={linerArrow} alt="linerArrow" />
      </ButtonCompItem>

      <ButtonCompText className="rightButtonCompText">
        {buttonText}
      </ButtonCompText>
    </ButtonCompWrapper>
  );
};

export default ButtonComp;
