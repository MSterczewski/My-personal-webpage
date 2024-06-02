import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Layout from "../shared/layout/Layout";
import { Colors } from "../../resources/Colors";
import { useState } from "react";
import Backend from "./Services/Backend";
import PageHeader from "../shared/PageHeader";
import WebApp from "./Services/WebApp";
import Frontend from "./Services/Frontend";

export default function MyServices() {
  const tabs = [
    "Aplikacje internetowe",
    "Back-end",
    "Front-end",
    "Projektowanie",
    "Chmura",
    "Analiza danych",
    "Dydaktyka",
  ];
  const [selectedTab, setSelectedTab] = useState("Aplikacje internetowe");

  return (
    <Layout>
      <PageHeader text="Moje usługi" />
      <Grid container marginBottom={"3%"} marginTop={"1%"} width={"100%"}>
        <Grid item xs={2}>
          <Stack gap={1} marginRight={"20px"} marginLeft={"20px"}>
            {tabs.map((t) => (
              <Box key={t}>
                <Service tab={t} />
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={10}>
          {selectedTab === "Aplikacje internetowe" && <WebApp />}
          {selectedTab === "Back-end" && <Backend />}
          {selectedTab === "Front-end" && <Frontend />}
        </Grid>
      </Grid>
    </Layout>
  );

  function Service({ tab }: { tab: string }) {
    const isSelected = selectedTab === tab;
    return (
      <Button
        sx={{
          width: "100%",
          height: "40px",
          backgroundColor: isSelected ? Colors.Accent : Colors.Background,
          borderColor: Colors.Text,
          border: isSelected ? 0 : 1,
          borderRadius: 7,
          textTransform: "none",
        }}
        disabled={isSelected}
        onClick={() => setSelectedTab(tab)}
      >
        <Typography
          color={isSelected ? Colors.Background : Colors.Text}
          fontWeight={isSelected ? "bold" : "normal"}
          align="center"
          width={"100%"}
        >
          {tab}
        </Typography>
      </Button>
    );
  }
}
