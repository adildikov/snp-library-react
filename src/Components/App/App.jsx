import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DisplayContainer from "../Display/DisplayContainer";
import HeaderContainer from "../Header/HeaderContainer";
import MainContainer from "../Main/MainContainer";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/books" component={MainContainer} />
        <Route path="/books/?search=:filter" component={MainContainer} />
        <Route path="/books/:bookId?" component={DisplayContainer} />
      </Switch>
    </BrowserRouter>
  );
}
