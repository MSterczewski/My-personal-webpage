import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AppRoutes } from "./resources/AppRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import ContactThankYou from "./pages/Contact/ContactThankYou";
import MyServices from "./pages/MyServices/MyServices";
import Home from "./pages/Home/Home";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18next.init({
  resources,
  lng: "pl",
  interpolation: { escapeValue: false }, // React already does escaping
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Home} element={<Home />} />
          <Route path={AppRoutes.Contact} element={<Contact />} />
          <Route
            path={AppRoutes.ContactThankYou}
            element={<ContactThankYou />}
          />
          {/* <Route path={AppRoutes.AboutMe} element={<AboutMe />} /> */}
          {/* <Route path={AppRoutes.MyProjects} element={<MyProjects />} /> */}
          <Route path={AppRoutes.MyServices} element={<MyServices />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
