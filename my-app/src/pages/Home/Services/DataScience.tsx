import { Box, Typography } from "@mui/material";
import ServiceLayout from "../Shared/ServiceLayout";
import { ITechnologiesList } from "../Shared/TechnologiesList";

export default function DataScience() {
  const technologies: ITechnologiesList = {
    technologyGroups: [
      {
        groupName: "Matematyka",
        technologies: [
          { name: "Matematyka", value: 5 },
          { name: "Analiza statystyczna", value: 4 },
          { name: "Statystyka", value: 4 },
        ],
      },
      {
        groupName: "Narzędzia",
        technologies: [
          { name: "Python", value: 4 },
          { name: "Hadoop", value: 2 },
        ],
      },
    ],
  };

  return (
    <ServiceLayout technologies={technologies}>
      {
        <Box>
          <Typography>
            Analiza danych i statystyka pozwala na wykrycie potencjalnych
            zależności w zbiorze danych. Wykryte korelacje mogą pomóc zwiększyć
            sprzedaż firmy lub pomóc dotrzeć do większej liczby klientów.
          </Typography>
          <Typography>
            <br /> Analiza danych to szeroka dziedzina składająca się z wielu
            kategorii. U podstawy każdej leży zaawansowana matematyka, w
            szczególności statystyka i probabilistyka.
          </Typography>
          <Typography>
            <br /> Znajomość i zrozumienie analizy danych (a przede wszystkim
            matematyki ją rządzącej) jest kluczowa do zrozumienia i rozwoju
            sztucznej inteligencji.
          </Typography>
        </Box>
      }
    </ServiceLayout>
  );
}
