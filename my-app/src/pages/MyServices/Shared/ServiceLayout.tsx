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
    <Box display={"flex"}>
      <Box width={"100%"}>
        <Box marginRight={"10px"}>{children}</Box>
      </Box>
      <Box minWidth={"280px"}>
        <TechnologiesList technologies={technologies} />
      </Box>
    </Box>
    // <Grid container>
    //   <Grid item xs={9.5}>
    //     <Box marginRight={"10px"}>{children}</Box>
    //   </Grid>
    //   <Grid item xs={2.5} minWidth={"280px"}>
    //     <TechnologiesList technologies={technologies} />
    //   </Grid>
    // </Grid>
  );
}
