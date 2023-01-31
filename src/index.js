import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SubscriptionProvider>
        <App />
      </SubscriptionProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
