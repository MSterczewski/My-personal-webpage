import { Box, Typography } from "@mui/material";
import { ITechnologiesList } from "../Shared/TechnologiesList";
import ServiceLayout from "../Shared/ServiceLayout";

export default function Cloud() {
  const technologies: ITechnologiesList = {
    technologyGroups: [
      {
        groupName: "Platformy chmurowe",
        technologies: [
          { name: "Azure", value: 5 },
          { name: "AWS", value: 2 },
        ],
      },
      {
        groupName: "Usługi",
        technologies: [
          { name: "Bazy danych", value: 5 },
          { name: "Hosting", value: 4 },
          { name: "Automatyczny mailing", value: 4 },
        ],
      },
    ],
  };

  return (
    <ServiceLayout technologies={technologies}>
      {
        <Box>
          <Typography>
            Chmura to szerokie pojęcie zazwyczaj opisujące infrastrukturę
            sieciową pozwalającą na dostęp do zasobów internetowych. Dobra
            znajomość chmury pozwoli na to, aby aplikacja była dostępna dla
            wszystkich, była dobrze skalowalna, a także mogła funkcjonować bez
            ingerencji administratora.
          </Typography>
        </Box>
      }
    </ServiceLayout>
  );
}
