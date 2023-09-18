import { Arrow, contactImg } from "../../../../assets/images/about";
import {
  Button,
  ContactWrapper,
  Form,
  FormContainer,
  Img,
  SubTitle,
  Title,
  TopTitle,
  WrapperInput,
} from "./ContactStyles";

const Contact = () => {
  return (
    <ContactWrapper>
      <Img src={contactImg} />
      <FormContainer>
        <TopTitle>
          <span></span> Contact Us
        </TopTitle>
        <Title>Get In Touch</Title>
        <SubTitle>
          The standard webpage maximum width dimensions for desktop screens are
          1440 pixels. It's a common
        </SubTitle>
        <Form>
          <WrapperInput>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="surname">Last Name</label>
            <input type="text" name="surname" />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="Email">Email*</label>
            <input type="email" name="Email" />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="address">Address</label>
            <input type="text" />
          </WrapperInput>
          <textarea name="" id=""></textarea>
          <Button>
            Submit Now{" "}
            <div>
              <img src={Arrow} alt="" />
            </div>{" "}
          </Button>
        </Form>
      </FormContainer>
    </ContactWrapper>
  );
};

export default Contact;
