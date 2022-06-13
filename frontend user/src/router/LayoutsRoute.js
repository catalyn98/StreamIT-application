import { Switch, Route } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";

const LayoutsRoute = () => {
  return (
    <Switch>
      <Route path="/" component={PagesLayout} />
    </Switch>
  );
};

export default LayoutsRoute;
