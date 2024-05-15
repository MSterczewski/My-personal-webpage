import { Box, Typography } from "@mui/material";
import Layout from "../shared/layout/Layout";

export default function AboutMe() {
  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          verticalAlign: "middle",
          alignSelf: "center",
          textAlign: "center",
          fontSize: 32,
        }}
      >
        Strona w budowie
      </Box>
    </Layout>
  );
}
