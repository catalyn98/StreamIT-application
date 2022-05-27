import { Switch, Route } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";
import ExtraLayout from "../layouts/ExtraLayout";

const LayoutsRoute = () => {
  return (
    <Switch>
      <Route path="/welcome" component={ExtraLayout} />
      <Route path="/" component={PagesLayout} />
    </Switch>
  );
};

export default LayoutsRoute;
