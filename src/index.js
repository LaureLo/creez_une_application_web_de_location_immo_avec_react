import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route exact path="lodging/:id" element={<Lodging />} />
          <Route exact path="a-propos" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
