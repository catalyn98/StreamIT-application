import React from "react";
import { Switch, Route } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";
import ExtraPages from "./ExtraPages";

export default function LayoutsRoute() {
  return (
    <Switch>
      <Route path="/authentication" component={ExtraPages} />
      <Route path="/" component={PagesLayout} />
    </Switch>
  );
}
