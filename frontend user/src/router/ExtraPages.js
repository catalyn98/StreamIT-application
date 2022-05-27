import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import RecoveryPassword from "../pages/recovery-password/RecoveryPassword";

const ExtraPages = () => {
  return (
    <Switch>
      <Route path="/welcome/login" component={Login} />
      <Route path="/welcome/register" component={Register} />
      <Route path="/welcome/recovery-password" component={RecoveryPassword} />
    </Switch>
  );
};

export default ExtraPages;
