import { useEffect, useState } from "react";
import { bgOfLogin } from "../../assets/login";
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
import LogIn from "../../components/auth/LoginWithGoogle";

import { gapi } from "gapi-script";
import FacebookAuth from "../../components/auth/LoginWithFacebook";
const clientId =
  " 966236271264-dhuq7jd7lcuv232rsp67rvlpf6o16og9.apps.googleusercontent.com"; //client id

//  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  //client secret

const Login = () => {
  const [openLogin, setOpenLogin] = useState(false);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const accesToken = gapi?.auth?.getToken()?.access_token;
  console.log(accesToken);

  return (
    <>
      {openLogin ? (
        <LoginWrapper>
          <BgImg src={bgOfLogin} />

          <ContainerLoginMainSection>
            <TopTile>Sign In</TopTile>
            <ContainerSocial>
              <SocialIcon>
                <LogIn />
                {/* <img src={google} alt="" /> */}
              </SocialIcon>
              <SocialIcon>
                <FacebookAuth />
                {/* <img src={facebook} alt="" /> */}
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
                <LogIn />
                {/* <img src={google} alt="" /> */}
              </SocialIcon>
              <SocialIcon>
                <FacebookAuth />
                {/* <img src={facebook} alt="" /> */}
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
