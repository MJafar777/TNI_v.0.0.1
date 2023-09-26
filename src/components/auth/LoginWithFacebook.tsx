import React from "react";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";

const FacebookAuth: React.FC = () => {
  const navigation = useNavigate();

  const responseFacebook = (response: { name: string }) => {
    alert(`Xush kelibiz do'stim ${response?.name}`);
    if (response?.name) {
      navigation("/");
    }
  };

  return (
    <div>
      <FacebookLogin
        appId="2456849297826524"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        scope="public_profile"
      />
    </div>
  );
};

export default FacebookAuth;
