import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/provider/DataContext.jsx";
import { ControlProvider } from "./components/provider/ControlContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <ControlProvider>
          <App />
        </ControlProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
