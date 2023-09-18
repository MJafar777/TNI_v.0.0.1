import { FC } from "react";

import { ParagraphWrapper } from "./paragraph";

interface Props {
  text: string;
  color: string;
  fontFamily: string;
  width: number | string;
  margin: number | string;
  fontSize: number | string;
  fontWeight: string | number;
  lineHeight: string;
  letterSpacing: string;
}

const Paragraph: FC<Props> = (props) => {
  const {
    text,
    width,
    color,
    margin,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
    letterSpacing,
  } = props;
  return (
    <ParagraphWrapper
      color={color}
      width={width}
      margin={margin}
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
    >
      {text}
    </ParagraphWrapper>
  );
};

export default Paragraph;
