// import MainHeader from "../../../../layouts/header/mainHeader/MainHeader";
import { FC } from "react";
import MainHeader from "../../layouts/header/mainHeader/MainHeader";

import {
  Text,
  Title,
  Content,
  TopTitle,
  BorderBottom,
  HeaderWrapper,
} from "./HeaderStyle";

interface Props {
  TitleHeader: string;
  SubTitleHeader: string;
}

const HeaderTop: FC<Props> = (props) => {
  const { TitleHeader, SubTitleHeader } = props;
  return (
    <HeaderWrapper>
      <MainHeader />
      <Content>
        <TopTitle>
          <span></span>
          <Text>{TitleHeader}</Text>
          <span></span>
        </TopTitle>
        <Title>{SubTitleHeader}</Title>
        <BorderBottom></BorderBottom>
      </Content>
    </HeaderWrapper>
  );
};

export default HeaderTop;
