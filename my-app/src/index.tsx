import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AppRoutes } from "./resources/AppRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import ContactThankYou from "./pages/Contact/ContactThankYou";
import Home from "./pages/Home/Home";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";

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

i18next.use(LanguageDetector).init({
  resources,
  supportedLngs: ["pl", "en"],
  interpolation: { escapeValue: false }, // React already does escaping
  backend: {
    backends: [LocalStorageBackend],
  },
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
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
