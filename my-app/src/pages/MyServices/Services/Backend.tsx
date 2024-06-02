import { Box, Typography } from "@mui/material";
import { ITechnologiesList } from "../Shared/TechnologiesList";
import ServiceLayout from "../Shared/ServiceLayout";

export default function Backend() {
  const technologies: ITechnologiesList = {
    technologyGroups: [
      {
        groupName: "Serwer",
        technologies: [
          { name: "C#", value: 5 },
          { name: "PHP", value: 2 },
          { name: "Java", value: 1 },
        ],
      },
      {
        groupName: "Bazy danych",
        technologies: [
          { name: "SQL", value: 5 },
          { name: "no-SQL", value: 4 },
          { name: "Optymalizacja baz danych", value: 3 },
        ],
      },
      {
        groupName: "Bezpieczeństwo",
        technologies: [
          { name: "Ochrona danych osobowych", value: 4 },
          { name: "Kryptografia", value: 3 },
        ],
      },
    ],
  };

  return (
    <ServiceLayout technologies={technologies}>
      {
        <Box>
          <Typography>
            {/* Backend, czyli wszystko co dzieje się pod maską, to serce każdego
            zaawansowanego systemu komuperowego. Za słowem */}
            W budowie
          </Typography>
        </Box>
      }
    </ServiceLayout>
  );
}
