import { Box, Typography } from "@mui/material";
import Layout from "../shared/layout/Layout";
import { Colors } from "../../resources/Colors";

export default function Contact() {
  return (
    <Layout>
      <Box height={"100%"} sx={{ verticalAlign: "center" }} marginTop={"3%"}>
        <Typography variant="h4" color={Colors.Accent} align="center">
          Dziękuję za kontakt!
        </Typography>
        <Typography
          fontStyle={"italic"}
          fontWeight={"light"}
          align="center"
          marginTop={"1%"}
        >
          W przeciągu kilku dni odpowiem na Twoje zapytanie.
        </Typography>
      </Box>
    </Layout>
  );
}
