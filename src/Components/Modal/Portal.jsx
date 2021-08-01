import { Component } from "react";
import reactDom from "react-dom";

class Portal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return reactDom.createPortal(children, this.el);
  }
}

export default Portal;
