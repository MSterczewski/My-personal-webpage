import axios from "axios";
import { Endpoints } from "../resources/Endpoints";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function SendEvent({
  pageName,
  pageSection,
}: {
  pageName: string;
  pageSection: string;
}) {
  const { i18n } = useTranslation();
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_SERVER_URL + Endpoints.CreateMessage, {
        pageName,
        pageSection,
        lang: i18n.language,
      })
      .catch(() => {});
  });
}
