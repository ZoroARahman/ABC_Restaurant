// import ReactDOM from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import Reservation from "./components/Reservation/Reservation.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
      <Reservation/>
    </StoreContextProvider>
  </BrowserRouter>
);
