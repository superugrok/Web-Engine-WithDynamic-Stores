import React from "react";
import ReactDOM from "react-dom";
import "./styles/common/normalize.css";
import "./styles/common/common.css";
// react-slick (slider)
import '@Styles/components/appComponents/footer/reactSlick/slick.css';
import '@Styles/components/appComponents/footer/reactSlick/slick-theme.css';
import { AppWrapper } from "@App/AppWrapper";

const rootPage = document.getElementById("root");

declare const module: any;
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<AppWrapper />, rootPage);
