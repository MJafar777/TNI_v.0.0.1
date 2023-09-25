// import { useState } from "react";

import { buyCard, arrowRight, linerArrow } from "../../assets/images";
import { contactImg } from "../../assets/images/about";
import { BtnCurd } from "../BtnCurd";
import ButtonComp from "../buttons/ButtonComp";
import {
  Img,
  Form,
  Title,
  SubTitle,
  TopTitle,
  TopOfForm,
  WrapperInput,
  FormContainer,
  ContactWrapper,
  WrapperTextarea,
} from "./ContactStyles";

// import { Alert } from "@mui/material";

const Contact = () => {
  // const [sendMessage, setSendMessage] = useState(false);

  return (
    <ContactWrapper id="#contact-us">
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
      <div className="container">
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
              {/* <ButtonComp
                //  onClick={() => setSendMessage(true)}

                buttonText={"Submit Now"}
              ></ButtonComp> */}
              <BtnCurd
                btnName={"Submit Now"}
                id={""}
                iconHover={linerArrow}
                iconDefault={arrowRight}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </Form>
        </FormContainer>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
