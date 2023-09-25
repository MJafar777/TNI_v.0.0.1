import MainHeader from "../../../../layouts/header/mainHeader/MainHeader";
import useLocales from "../../../../locales/useLocales";
import {
  BorderBottom,
  Content,
  Text,
  HeaderWrapper,
  Title,
  TopTitle,
} from "./HeaderStyle";

const Header = () => {
  const { translate } = useLocales();

  return (
    <HeaderWrapper>
      <MainHeader />

      <Content>
        <TopTitle>
          <span></span>
          <Text>About Us</Text>
          <span></span>
        </TopTitle>
        <Title>{translate("TitleOfHeaderOfAbout")}</Title>
        <BorderBottom></BorderBottom>
      </Content>
    </HeaderWrapper>
  );
};

export default Header;
