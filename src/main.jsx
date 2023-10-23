import React from "react"; //biblioteca, core do React
import ReactDOM from "react-dom/client"; //integração com o core do react com a DOM (Document Object model, representação do html através do JS)
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
