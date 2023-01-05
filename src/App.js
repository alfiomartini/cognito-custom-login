import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Switch, useHistory } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { signOut } from "./utils";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const history = useHistory();

  const doSignOut = async () => {
    const token = user.RefreshToken;
    console.log("refresh token", token);
    await signOut(token);
    setUser(null);
    history.push("/");
  };

  return (
    <div>
      <Navbar user={user} doSignOut={doSignOut} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h2>Testing Cognito API</h2>
          </Route>
          <Route path="/signIn">
            <SignIn setUser={setUser} />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
