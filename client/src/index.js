import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SavedSearches from "./components/savedSearches/SavedSearches.component";
import BaseLayout from "./components/layout/BaseLayout.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/savedsearches" component={SavedSearches} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
