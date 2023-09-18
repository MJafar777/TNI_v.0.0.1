import {
  BorderBottom,
  Content,
  Text,
  HeaderWrapper,
  Title,
  TopTitle,
} from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderWrapper>
      <Content>
        <TopTitle>
          <span></span>
          <Text>About Us</Text>
          <span></span>
        </TopTitle>
        <Title>Who we are</Title>
        <BorderBottom></BorderBottom>
      </Content>
    </HeaderWrapper>
  );
};

export default Header;
