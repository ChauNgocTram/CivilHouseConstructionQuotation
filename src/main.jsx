import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./context/store";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import HouseContextProvider from "./components/HouseProjectsComponent/Filter/HouseContext"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <HouseContextProvider>
        <App />
        <ToastContainer position="top-right" autoClose={3000} />
      </HouseContextProvider>
    </Provider>
  </React.StrictMode>
);
