import axios from "axios";

export const createHttpClient = () => {
  return axios.create({
    baseURL: "https://cognito-idp.sa-east-1.amazonaws.com",
    withCredentials: false, //enforces CORS
  });
};

export const doSignIn = async (email, password) => {
  const body = {
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: "1l1pg2a87u7agm14jh6loovrbh",
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
    ClientId: "1l1pg2a87u7agm14jh6loovrbh",
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
    ClientId: "1l1pg2a87u7agm14jh6loovrbh",
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
    ClientId: "1l1pg2a87u7agm14jh6loovrbh",
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
