import React from "react";
import { Switch, Route } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";

export default function LayoutsRoute() {
  return (
    <Switch>
      <Route path="/" component={PagesLayout} />
    </Switch>
  );
}
