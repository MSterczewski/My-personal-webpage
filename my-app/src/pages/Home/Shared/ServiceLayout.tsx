import { Box } from "@mui/material";
import TechnologiesList, { ITechnologiesList } from "./TechnologiesList";

export default function ServiceLayout({
  technologies,
  children,
}: {
  technologies: ITechnologiesList;
  children: React.ReactNode;
}) {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      flexWrap={{ xs: "wrap", md: "nowrap" }}
    >
      <Box minWidth={{ xs: "100%", md: 0 }} marginRight={"10px"}>
        {children}
      </Box>
      <Box minWidth={"400px"}>
        <TechnologiesList technologies={technologies} />
      </Box>
    </Box>
  );
}
