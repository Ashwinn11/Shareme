import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
  <GoogleOAuthProvider clientId="668568297002-1em68t427dflfcjevonvhphj1823rhgv.apps.googleusercontent.com">
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
