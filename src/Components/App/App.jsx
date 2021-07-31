import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Display from "../Display";
import Header from "../Header";
import Main from "../Main";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/current_book" component={Display} />
      </Switch>
    </BrowserRouter>
  );
}
