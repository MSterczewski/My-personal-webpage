import { Box, Typography } from "@mui/material";
import { ITechnologiesList } from "../Shared/TechnologiesList";
import ServiceLayout from "../Shared/ServiceLayout";

export default function WebApp() {
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

  return (
    <ServiceLayout technologies={technologies}>
      <Box>
        <Typography>
          Posiadanie aplikacji lub strony internetowej jest kluczowe dla biznesu
          niezależnie od jego rodzaju. Dzięki stronie www zyskuje zarówno mała
          firma, jak i duży e-commerce. W czasie dostępności do internetu z
          urządzeń mobilnych ważne jest, aby firma była widoczna w sieci.
        </Typography>
        <Typography fontWeight={"bold"}>
          <br /> Kto może zyskać na posiadaniu strony internetowej?
        </Typography>
        <Typography>
          - Osoby prywatne, chcące zbudować wirtualne portfolio (np. fotograf,
          grafik).
          <br /> - Małe firmy, dla których strona internetowa jest wizytówką.
          <br /> - Średnie firmy, które mogą sprzedawać usługi lub produkty
          przez internet.
          <br />
        </Typography>
        <Typography fontWeight={"bold"}>
          <br /> Co jest kluczowe do sukcesu strony internetowej?
        </Typography>
        <Typography>
          - Szata graficzna, najlepiej spójna z logotypem firmy.
          <br />- Pozycjonowanie w wyszukiwarce np. Google (tzw. SEO).
        </Typography>
      </Box>
    </ServiceLayout>
  );
}
