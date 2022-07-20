import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import userflow from "userflow.js";

userflow.init("USERFLOW_TOKEN");
userflow.identify("USER_ID", {
  name: "Dave",
  email: "dave.cooper@elephant.healthcare",
  signed_up_at: "2022-07-20T14:08:36.244Z",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
