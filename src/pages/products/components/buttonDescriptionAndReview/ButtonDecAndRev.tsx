import { FC } from "react";

import {
  Span,
  BgColor,
  ButtonDecAndRevChild,
  ButtonDecAndRevWrapper,
} from "./buttonDecAndRevStyle";

interface Props {
  text: string;
  subText?: string;
  onClick: () => void;
  BtnSelected: boolean;
}

const ButtonDecAndRev: FC<Props> = (props) => {
  const { text, BtnSelected, subText } = props;

  return (
    <ButtonDecAndRevWrapper
      BtnSelected={BtnSelected}
      onClick={() => props.onClick()}
    >
      <BgColor BtnSelected={BtnSelected}>
        <ButtonDecAndRevChild BtnSelected={BtnSelected}>
          {text} <Span BtnSelected={BtnSelected}>{subText}</Span>
        </ButtonDecAndRevChild>
      </BgColor>

      
    </ButtonDecAndRevWrapper>
  );
};

export default ButtonDecAndRev;
