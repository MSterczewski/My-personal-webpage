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
            {/* Backend, czyli wszystko co dzieje się pod maską, to serce każdego
            zaawansowanego systemu komuperowego. Za słowem */}
            W budowie
          </Typography>
        </Box>
      }
    </ServiceLayout>
  );
}
