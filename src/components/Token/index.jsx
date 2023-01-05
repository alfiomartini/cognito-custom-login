import React from "react";
import { Button } from "../Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

async function confirmSignUp(email, token) {
  let confirm = false;
  try {
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
    const confirmPwd = await confirmSignUp(email, token);
    if (confirmPwd) {
      alert("Sign up successful");
      history.push("/signIn");
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
