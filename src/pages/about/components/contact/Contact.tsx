import { useState } from "react";
import { Arrow, contactImg } from "../../../../assets/images/about";
import {
  Button,
  ContactWrapper,
  Form,
  FormContainer,
  Img,
  SubTitle,
  Title,
  TopOfForm,
  TopTitle,
  WrapperInput,
  WrapperTextarea,
} from "./ContactStyles";
import { Alert } from "@mui/material";

const Contact = () => {
  const [sendMessage, setSendMessage] = useState(false);

  return (
    <ContactWrapper>
      <Img src={contactImg} />
      <FormContainer>
        <TopOfForm>
          <TopTitle>
            <span></span> Contact Us <span className="rightBorder"></span>
          </TopTitle>
          <Title>Get In Touch</Title>
          <SubTitle>
            The standard webpage maximum width dimensions for desktop screens
            are 1440 pixels. It's a common
          </SubTitle>
        </TopOfForm>
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
          <WrapperTextarea>
            <label htmlFor="message">Message</label>
            <textarea name="message" id=""></textarea>
          </WrapperTextarea>
          <Button onClick={() => setSendMessage(true)}>
            Submit Now
            <div>
              <img src={Arrow} alt="" />
            </div>
          </Button>
          {sendMessage ? (
            <>
              <Alert severity="warning">
                This is a warning alert — check it out!
              </Alert>
              <Alert severity="info">
                This is an info alert — check it out!
              </Alert>
              <Alert severity="success">
                This is a success alert — check it out!
              </Alert>
            </>
          ) : (
            ""
          )}
        </Form>
      </FormContainer>
    </ContactWrapper>
  );
};

export default Contact;
