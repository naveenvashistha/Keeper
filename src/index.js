import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";
 
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);