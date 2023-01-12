import React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./styles.css";

export const Navbar = ({ user, doSignOut }) => {
  let email, idToken;
  idToken = user?.IdToken;
  if (idToken) email = jwt_decode(idToken).email;

  return (
    <div className="navbar">
      <div className="logo">Cognito-Custom-UI</div>

      {!user && (
        <Link to="/signIn" className="link">
          Sign In
        </Link>
      )}
      {!user && (
        <Link to="/signUp" className="link">
          Sign Up
        </Link>
      )}
      {user && (
        <Link to="/" className="link" onClick={() => doSignOut()}>
          Sign Out
        </Link>
      )}
      {user && <div className="auth-user"> {email}</div>}
    </div>
  );
};
