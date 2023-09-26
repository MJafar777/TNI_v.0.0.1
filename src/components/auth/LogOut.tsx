import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId: string =
  "966236271264-dhuq7jd7lcuv232rsp67rvlpf6o16og9.apps.googleusercontent.com";

const LogOut: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const responseGoogle = (response: string) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout from Google"
        // onLogoutSuccess={responseGoogle}
      />
    </div>
  );
};

export default LogOut;
