import React from "react";
import { Button } from "../Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { confirmSignUp } from "../../utils";

async function doConfirmSignUp(email, token) {
  let confirm = false;
  try {
    await confirmSignUp(email, token);
    confirm = true;
  } catch (error) {
    console.log("error confirming sign up", error);
  }
  return confirm;
}

export const Token = ({ email }) => {
  const [token, setToken] = useState("");

  const history = useHistory();

  const clear = () => {
    setToken("");
  };

  const handleToken = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmSignUp = await doConfirmSignUp(email, token);
    if (confirmSignUp) {
      alert("Sign up successful");
      history.replace("/signIn");
    } else {
      alert("Confirmation unsuccessful. Type code again.");
    }
    clear();
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="token">Confirmation Token</label>
        <input
          type="text"
          name="text"
          id="token"
          placeholder="token"
          value={token}
          onChange={handleToken}
        />
      </div>
      <Button width="90%" type={"submit"}>
        Submit
      </Button>
    </form>
  );
};
