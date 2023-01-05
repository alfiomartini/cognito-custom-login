import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar user={user} doSignOut={() => {}} />
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
