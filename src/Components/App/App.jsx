import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DisplayContainer from "../Display/DisplayContainer";
import Header from "../Header";
import MainContainer from "../Main/MainContainer";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/current_book" component={DisplayContainer} />
      </Switch>
    </BrowserRouter>
  );
}
