import { Box, Typography } from "@mui/material";
import { ITechnologiesList } from "../Shared/TechnologiesList";
import ServiceLayout from "../Shared/ServiceLayout";
import { useTranslation } from "react-i18next";

const technologies: ITechnologiesList = {
  technologyGroups: [
    {
      groupName: "Komponenty aplikacji",
      technologies: [
        { name: "HTTP", value: 5 },
        { name: "Back-end", value: 5 },
        { name: "Front-end", value: 4 },
      ],
    },
    {
      groupName: "Projektowanie i planowanie",
      technologies: [
        { name: "Analiza techniczna", value: 5 },
        { name: "Projektowanie aplikacji", value: 5 },
        { name: "Dokumentacja", value: 5 },
      ],
    },
  ],
};

export default function WebApp() {
  const { t } = useTranslation();
  return (
    <ServiceLayout technologies={technologies}>
      <Box>
        <Typography>{t("web_app_why")}</Typography>
        <Typography fontWeight={"bold"}>
          <br /> {t("web_app_who_can_benefit")}
        </Typography>
        <Typography>
          - {t("web_app_who_can_benefit_1")}
          <br /> - {t("web_app_who_can_benefit_2")}
          <br /> - {t("web_app_who_can_benefit_3")}
          <br />
        </Typography>
        <Typography fontWeight={"bold"}>
          <br /> {t("web_app_what_is_key")}
        </Typography>
        <Typography>
          - {t("web_app_what_is_key_1")}
          <br />- {t("web_app_what_is_key_2")}
        </Typography>
      </Box>
    </ServiceLayout>
  );
}
