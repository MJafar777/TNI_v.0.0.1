// import { useState } from "react";

import {
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

import { contactImg } from "../../../../assets/images/about";
import ButtonComp from "../../../../components/buttons/ButtonComp";
// import { Alert } from "@mui/material";

const Contact = () => {
  // const [sendMessage, setSendMessage] = useState(false);

  return (
    <ContactWrapper>
      {/* {sendMessage ? (
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
          )} */}

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
            <input type="text" name="name" required />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="surname">Last Name</label>
            <input type="text" name="surname" required />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="Email">Email*</label>
            <input type="email" name="Email" required />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" required={true} />
          </WrapperInput>
          <WrapperTextarea>
            <label htmlFor="message">Message</label>
            <textarea name="message" id=""></textarea>
          </WrapperTextarea>
          <div className="my-2">
            <ButtonComp
              //  onClick={() => setSendMessage(true)}

              buttonText={"Submit Now"}
            ></ButtonComp>
          </div>
        </Form>
      </FormContainer>
    </ContactWrapper>
  );
};

export default Contact;
