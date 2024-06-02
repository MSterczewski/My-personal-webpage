import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AppRoutes } from "./resources/AppRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import ContactThankYou from "./pages/Contact/ContactThankYou";
import MyServices from "./pages/MyServices/MyServices";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Contact />} />
        <Route path={AppRoutes.Contact} element={<Contact />} />
        <Route path={AppRoutes.ContactThankYou} element={<ContactThankYou />} />
        {/* <Route path={AppRoutes.AboutMe} element={<AboutMe />} /> */}
        {/* <Route path={AppRoutes.MyProjects} element={<MyProjects />} /> */}
        <Route path={AppRoutes.MyServices} element={<MyServices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
