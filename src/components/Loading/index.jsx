import React from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import { COGNITO_BASE_URL, CLIENT_ID, REDIRECT_URI } from "../../utils";

export const Loading = ({ setUser }) => {
  const location = useLocation();
  const history = useHistory();
  const authCode = new URLSearchParams(location.search).get("code");
  console.log("start loading");

  if (!authCode) {
    console.log("authCode is undefined");
    return;
  }

  console.log("get auth code");
  const body = {
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    code: authCode,
    redirect_uri: REDIRECT_URI,
  };

  const formBody = Object.keys(body)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`)
    .join("&");

  const headers = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  axios
    .post(`${COGNITO_BASE_URL}/oauth2/token`, formBody, headers)
    .then(({ data }) => {
      const { access_token, id_token, refresh_token } = data;
      localStorage.setItem("id_token", id_token);
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      setUser({ access_token, refresh_token, id_token });
      history.replace("/");
    })
    .catch((error) => console.log(error));

  return (
    <div>
      <h3>Loading...</h3>
    </div>
  );
};
