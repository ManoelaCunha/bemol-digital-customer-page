import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import Providers from "./providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
