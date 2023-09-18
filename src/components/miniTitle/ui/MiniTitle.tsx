import { FC } from "react";

import { MiniTitleWrapper } from "./miniTitle";

interface Props {
  textTitle: string;
  fontSize: number | string;
}
const MiniTitle: FC<Props> = (props) => {
  const { textTitle, fontSize } = props;
  return <MiniTitleWrapper fontSize={fontSize}>{textTitle}</MiniTitleWrapper>;
};

export default MiniTitle;
