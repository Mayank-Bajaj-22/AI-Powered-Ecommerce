import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext.jsx";
import UserDataContext from "./context/UserContext.jsx";
import ShopContext from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <UserDataContext>
        <ShopContext>
          <App />
        </ShopContext>
      </UserDataContext>
    </AuthContext>
  </BrowserRouter>,
);
