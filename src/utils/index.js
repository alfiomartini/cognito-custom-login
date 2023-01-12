import axios from "axios";

export const COGNITO_BASE_URL =
  "https://bultin-login.auth.sa-east-1.amazoncognito.com";
export const CLIENT_ID = "7k7tburvb5l8j3kd5lnlku377";
export const RESPONSE_TYPE = "code";
export const SCOPE = "phone+email+openid+aws.cognito.signin.user.admin+profile";
export const REDIRECT_URI_DEV = "http://localhost:3010/loading";
export const REDIRECT_URI_PROD =
  "https://alfiomartini.github.io/cognito-custom-ui/loading";

export const REDIRECT_URI =
  process.env.NODE_ENV === "development" ? REDIRECT_URI_DEV : REDIRECT_URI_PROD;

export const QUERY = `client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`;

export const GOOGLE_ENDPOINT = `/oauth2/authorize?identity_provider=Google&${QUERY}`;
export const GOOGLE_URL = `${COGNITO_BASE_URL}${GOOGLE_ENDPOINT}`;

export const doSignIn = async (email, password) => {
  const body = {
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: "7k7tburvb5l8j3kd5lnlku377",
  };

  const headers = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
  };
  return axios.post("https://cognito-idp.sa-east-1.amazonaws.com", body, {
    headers: headers,
  });
};

export const signOut = async (token) => {
  const body = {
    Token: token,
    ClientId: "7k7tburvb5l8j3kd5lnlku377",
  };

  const headers = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityProviderService.RevokeToken",
  };
  return axios.post("https://cognito-idp.sa-east-1.amazonaws.com", body, {
    headers: headers,
  });
};

export const signUp = async (email, password) => {
  const body = {
    ClientId: "7k7tburvb5l8j3kd5lnlku377",
    Password: password,
    UserAttributes: [
      {
        Name: "email",
        Value: email,
      },
    ],
    Username: email,
  };

  const headers = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityProviderService.SignUp",
  };
  return axios.post("https://cognito-idp.sa-east-1.amazonaws.com", body, {
    headers: headers,
  });
};

export const confirmSignUp = (email, token) => {
  const body = {
    ClientId: "7k7tburvb5l8j3kd5lnlku377",
    ConfirmationCode: token,
    Username: email,
  };
  const headers = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityProviderService.ConfirmSignUp",
  };
  return axios.post("https://cognito-idp.sa-east-1.amazonaws.com", body, {
    headers: headers,
  });
};
