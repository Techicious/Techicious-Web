import React from "react";
import ReactDOM from "react-dom/client";
import Preloder from "./components/Preloder";
import store from "./redux/store";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Preloder />
    {/* 
<Provider 
value={store}
> */}
    <App />
    {/* </Provider> */}
  </>
);
