import { Box } from "@mui/material";
import Layout from "../shared/layout/Layout";

export default function Home() {
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
