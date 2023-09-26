import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookAuth: React.FC = () => {
  const responseFacebook = (response: { name: string }) => {
    alert(`Xush kelibiz do'stim ${response?.name}`);
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
