import React from "react";
import { GOOGLE_URL } from "../../utils";
import { FcGoogle } from "react-icons/fc";
import "./styles.css";

export const SigInGoogle = () => {
  const handleGoogleSignIn = () => {
    console.log("Google URL", GOOGLE_URL);
    window.location.href = GOOGLE_URL;
  };
  return (
    <div className="google-signIn">
      <span>
        <FcGoogle size={30} />
      </span>
      <button onClick={handleGoogleSignIn} className="btn-google">
        SignIn with Google
      </button>
    </div>
  );
};
