import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
