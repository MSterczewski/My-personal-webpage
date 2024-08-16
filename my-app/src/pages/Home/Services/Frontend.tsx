import { Box, Typography } from "@mui/material";
import { ITechnologiesList } from "../Shared/TechnologiesList";
import ServiceLayout from "../Shared/ServiceLayout";

export default function Frontend() {
  const technologies: ITechnologiesList = {
    technologyGroups: [
      {
        groupName: "Projektowanie",
        technologies: [
          { name: "UX", value: 5 },
          { name: "UI", value: 4 },
          { name: "Programy graficzne", value: 3 },
        ],
      },
      {
        groupName: "Web design",
        technologies: [
          { name: "HTML", value: 5 },
          { name: "JavaScript", value: 4 },
          { name: "TypeScript", value: 4 },
          { name: "React", value: 4 },
          { name: "CSS", value: 4 },
        ],
      },
    ],
  };

  return (
    <ServiceLayout technologies={technologies}>
      {
        <Box>
          <Typography>
            Frontend to wszystko to, co widzi użytkownik. Kolorystyka, układ
            strony, responsywność czy animacje to tylko część z funkcjonalności
            oferowanych przez frontend.
          </Typography>
          <Typography fontWeight={"bold"}>
            <br /> Co sprawia, że strona jest dobrze oceniana przez użytkownika?
          </Typography>
          <Typography>
            Istnieje dużo czynników, które wpływają na dobry odbiór strony
            internetowej bądź aplikacji. Z roku na rok pojawiają się nowe
            rekomendacje, a także innowacyjne podejścia do interfejsu
            użytkownika. Na ten moment można wyróżnić kilka (według mnie)
            najistotniejszych aspektów strony internetowej:
          </Typography>
          <Typography>
            - Przyjazna i spójna szata kolorystyczna (jak najmniej różnych
            kolorów).
            <br /> - Intuicyjny interfejs użytkownika.
            <br /> - Jak najmniej informacji tam, gdzie nie jest to konieczne.
            <br />
          </Typography>
        </Box>
      }
    </ServiceLayout>
  );
}
