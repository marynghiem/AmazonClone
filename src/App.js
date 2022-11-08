import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
