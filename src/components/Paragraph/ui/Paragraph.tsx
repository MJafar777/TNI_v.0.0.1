import { FC } from "react";

import { ParagraphWrapper } from "./paragraph";

interface Props {
  text: string | number;
  color: string;
  fontFamily: string;
  lineHeight: string;
  letterSpacing: string;
  textDecoration: string;
  width: number | string;
  margin: number | string;
  fontSize: number | string;
  fontWeight: string | number;
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
    textDecoration,
  } = props;

  return (
    <ParagraphWrapper
      color={color}
      width={width}
      margin={margin}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      textDecoration={textDecoration}
      letterSpacing={letterSpacing}
    >
      {text}
    </ParagraphWrapper>
  );
};

export default Paragraph;
