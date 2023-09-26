import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId: string =
  "966236271264-dhuq7jd7lcuv232rsp67rvlpf6o16og9.apps.googleusercontent.com";

const LoginWithGoogle: React.FC = () => {
  const responseGoogle = (response: unknown) => {
    console.log(response);
    // Handle the response from Google here, typically by sending it to your server for authentication.
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginWithGoogle;
