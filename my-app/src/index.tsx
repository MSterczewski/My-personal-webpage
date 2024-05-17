import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AppRoutes } from "./resources/AppRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";
import MyProjects from "./pages/MyProjects/MyProjects";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Contact />} />
        <Route path={AppRoutes.Contact} element={<Contact />} />
        <Route path={AppRoutes.AboutMe} element={<AboutMe />} />
        <Route path={AppRoutes.MyProjects} element={<MyProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
