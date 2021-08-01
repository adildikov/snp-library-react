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
        <Route exact path="/books" component={MainContainer} />
        <Route path="/books/:bookId?" component={DisplayContainer} />
      </Switch>
    </BrowserRouter>
  );
}
