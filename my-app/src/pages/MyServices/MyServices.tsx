import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Layout from "../shared/layout/Layout";
import { Colors } from "../../resources/Colors";
import { useState } from "react";
import Backend from "./Services/Backend";
import PageHeader from "../shared/PageHeader";
import WebApp from "./Services/WebApp";
import Frontend from "./Services/Frontend";
import { useLocation, useNavigate } from "react-router-dom";
import Cloud from "./Services/Cloud";
import DataScience from "./Services/DataScience";
import Teaching from "./Services/Teaching";

interface Tab {
  name: string;
  hash: string;
}

export default function MyServices() {
  const webappHash = "web-applications";
  const backendHash = "back-end";
  const frontendHash = "front-end";
  const cloudHash = "cloud";
  const dataScienceHash = "data-science";
  const teachingHash = "teaching";

  const tabs: Tab[] = [
    {
      name: "Aplikacje internetowe",
      hash: webappHash,
    },
    {
      name: "Back-end",
      hash: backendHash,
    },
    {
      name: "Front-end",
      hash: frontendHash,
    },
    // {
    //   name: "Projektowanie",
    //   hash: "design",
    // },
    {
      name: "Chmura",
      hash: cloudHash,
    },
    {
      name: "Analiza danych",
      hash: dataScienceHash,
    },
    {
      name: "Dydaktyka",
      hash: teachingHash,
    },
  ];
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(
    location.hash
      ? tabs.find((t) => t.hash == location.hash.replace("#", "")) ?? tabs[0]
      : tabs[0]
  );
  const navigate = useNavigate();

  function serviceContentSwitch(tabSwitch: string) {
    switch (tabSwitch) {
      case webappHash:
        return <WebApp />;
      case backendHash:
        return <Backend />;
      case frontendHash:
        return <Frontend />;
      case cloudHash:
        return <Cloud />;
      case dataScienceHash:
        return <DataScience />;
      case teachingHash:
        return <Teaching />;
      default:
        return "W trakcie budowy";
    }
  }

  return (
    <Layout>
      <PageHeader text="Moje usługi" />
      <Grid container marginBottom={""} marginTop={""} width={"100%"}>
        <Grid item xs={2}>
          <Stack gap={1} marginRight={"20px"} marginLeft={"20px"}>
            {tabs.map((t) => (
              <Service tab={t} />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={10}>
          {serviceContentSwitch(selectedTab.hash)}
          {/* can be rendered like here https://stackoverflow.com/questions/46592833/how-to-use-switch-statement-inside-a-react-component */}
          {/* {selectedTab.hash === webappHash && <WebApp />}
          {selectedTab.hash === backendHash && <Backend />}
          {selectedTab.hash === frontendHash && <Frontend />} */}
        </Grid>
      </Grid>
    </Layout>
  );

  function Service({ tab }: { tab: Tab }) {
    const isSelected = selectedTab.hash === tab.hash;
    return (
      <Box key={tab.hash}>
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
          onClick={() => {
            navigate("#" + tab.hash);
            setSelectedTab(tab);
          }}
        >
          <Typography
            color={isSelected ? Colors.Background : Colors.Text}
            fontWeight={isSelected ? "bold" : "normal"}
            align="center"
            width={"100%"}
          >
            {tab.name}
          </Typography>
        </Button>
      </Box>
    );
  }
}
