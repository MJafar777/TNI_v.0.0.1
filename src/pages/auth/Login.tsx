import { useState } from "react";
import { bgOfLogin, facebook, google } from "../../assets/login";
import {
  BgImg,
  Button,
  CheckBox,
  ContainerLoginMainSection,
  ContainerSocial,
  ContentLogin,
  EmailInput,
  LoginWrapper,
  NameInput,
  PasswordInput,
  SocialIcon,
  Subtitle,
  TopTile,
} from "./LoginStyles";
import { Link } from "react-router-dom";

const Login = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      {openLogin ? (
        <LoginWrapper>
          <BgImg src={bgOfLogin} />

          <ContainerLoginMainSection>
            <TopTile>Sign In</TopTile>
            <ContainerSocial>
              <SocialIcon>
                <img src={google} alt="" />
              </SocialIcon>
              <SocialIcon>
                <img src={facebook} alt="" />
              </SocialIcon>
            </ContainerSocial>
            <Subtitle>or</Subtitle>
            {/* <NameInput placeholder="Name" /> */}
            <EmailInput placeholder="Email" />
            <PasswordInput placeholder="Password" />
            <CheckBox>
              <input type="checkbox" name="check" />
              <label htmlFor="check">Remember me </label>
            </CheckBox>
            <Button>Log In</Button>
            <ContentLogin>
              {/* Already have an account?{" "} */}
              <Link to="/login" onClick={() => setOpenLogin(false)}>
                Forgot Password?{" "}
              </Link>{" "}
            </ContentLogin>
          </ContainerLoginMainSection>
        </LoginWrapper>
      ) : (
        <LoginWrapper>
          <BgImg src={bgOfLogin} />

          <ContainerLoginMainSection>
            <TopTile>Sign Up</TopTile>
            <ContainerSocial>
              <SocialIcon>
                <img src={google} alt="" />
              </SocialIcon>
              <SocialIcon>
                <img src={facebook} alt="" />
              </SocialIcon>
            </ContainerSocial>
            <Subtitle>or</Subtitle>
            <NameInput placeholder="Name" />
            <EmailInput placeholder="Email" />
            <PasswordInput placeholder="Password" />
            <CheckBox>
              <input type="checkbox" name="check" />
              <label htmlFor="check">
                Agree to <span>Terms</span> & <span>Privacy policy</span>
              </label>
            </CheckBox>
            <Button>Create Account</Button>
            <ContentLogin>
              Already have an account?{" "}
              <Link to="/login" onClick={() => setOpenLogin(true)}>
                Log in
              </Link>{" "}
            </ContentLogin>
          </ContainerLoginMainSection>
        </LoginWrapper>
      )}
    </>
  );
};

export default Login;
