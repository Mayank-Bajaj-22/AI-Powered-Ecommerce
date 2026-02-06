import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { UserDataContext } from "./context/UserContext";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import PlaceOrders from "./pages/PlaceOrders";

function App() {
  let { userData } = useContext(UserDataContext);
  let location = useLocation();

  return (
    <div className="text-3xl">
      <>
        {userData && <Navbar />}
        <Routes>
          <Route
            path="/login"
            element={
              userData ? (
                <Navigate to={location.state?.from || "/"} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/signup"
            element={
              userData ? (
                <Navigate to={location.state?.from || "/"} />
              ) : (
                <Registration />
              )
            }
          />
          <Route
            path="/"
            element={
              userData ? (
                <Home />
              ) : (
                <Navigate to="/login" state={{ from: location.pathname }} />
              )
            }
          />

          <Route
            path="/about"
            element={
              userData ? (
                <About />
              ) : (
                <Navigate to="/login" state={{ from: location.pathname }} />
              )
            }
          />

          <Route
            path="/collection"
            element={
              userData ? (
                <Collections />
              ) : (
                <Navigate to="/login" state={{ from: location.pathname }} />
              )
            }
          />
          <Route
            path="/contact"
            element={
              userData ? (
                <Contact />
              ) : (
                <Navigate to="/login" state={{ from: location.pathname }} />
              )
            }
          />
          <Route
            path="/product"
            element={
              userData ? (
                <Product />
              ) : (
                <Navigate to="/login" state={{ from: location.pathname }} />
              )
            }
          />
          <Route
            path="/productdetail/:productId"
            element={
              userData ? (
                <ProductDetails />
              ) : (
                <Navigate to="/login" state={{ from: location.pathname }} />
              )
            }
          />
          <Route
            path="/cart"
            element={
              userData ? (
                <Cart />
              ) : (
                <Navigate to="/login" state={{ from: location.pathname }} />
              )
            }
          />
          <Route
            path="/placeorder"
            element={
              userData ? (
                <PlaceOrders />
              ) : (
                <Navigate to="/login" state={{ from: location.pathname }} />
              )
            }
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
