import { Switch, Route } from "react-router-dom";
import Login from "../pages/login/Login";

const ExtraPages = () => {
  return (
    <Switch>
      <Route path="/authentication/login" component={Login} />
    </Switch>
  );
};

export default ExtraPages;
