import { Box, IconButton, SvgIconTypeMap, Typography } from "@mui/material";
import Layout from "../shared/layout/Layout";
import StorageIcon from "@mui/icons-material/Storage";
import { Colors } from "../../resources/Colors";
import { useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import WebApp from "./Services/WebApp";
import Backend from "./Services/Backend";
import Frontend from "./Services/Frontend";
import Cloud from "./Services/Cloud";
import DataScience from "./Services/DataScience";
import Teaching from "./Services/Teaching";
import { FontSizes } from "../../resources/FontSizes";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import LanguageIcon from "@mui/icons-material/Language";
import TvIcon from "@mui/icons-material/Tv";
import CloudIcon from "@mui/icons-material/Cloud";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SchoolIcon from "@mui/icons-material/School";
import { useTranslation } from "react-i18next";
import SendEvent from "../../functionalities/SendEvent";

const largeIcon = 60;
const smallIcon = 30;
const webappHash = "web-applications";
const backendHash = "back-end";
const frontendHash = "front-end";
const cloudHash = "cloud";
const dataScienceHash = "data-science";
const teachingHash = "teaching";

interface Tab {
  name: string;
  hash: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export default function Home() {
  const location = useLocation();

  const { t } = useTranslation();
  const tabs: Tab[] = [
    {
      name: t("web_applications"),
      hash: webappHash,
      icon: LanguageIcon,
    },
    {
      name: "Back-end",
      hash: backendHash,
      icon: StorageIcon,
    },
    {
      name: "Front-end",
      hash: frontendHash,
      icon: TvIcon,
    },
    // {
    //   name: "Projektowanie",
    //   hash: "design",
    // },
    {
      name: t("cloud"),
      hash: cloudHash,
      icon: CloudIcon,
    },
    {
      name: t("data_analysis"),
      hash: dataScienceHash,
      icon: QueryStatsIcon,
    },
    {
      name: t("teaching"),
      hash: teachingHash,
      icon: SchoolIcon,
    },
  ];
  const [selectedTab, setSelectedTab] = useState(
    location.hash
      ? tabs.find((t) => t.hash == location.hash.replace("#", "")) ?? tabs[0]
      : tabs[0]
  );

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
  const navigate = useNavigate();

  SendEvent({ pageName: "Home", pageSection: selectedTab.hash });

  return (
    <Layout>
      <Box marginTop={3}>
        <Box display={"flex"} alignItems={"flex-end"} justifyContent={"center"}>
          <Typography fontSize={FontSizes.Accent} lineHeight={0.7}>
            {t("master_cs")}{" "}
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize={70}
            color={Colors.Accent}
            lineHeight={{ xs: 1, md: 0.7 }}
          >
            Mateusz Sterczewski
          </Typography>
        </Box>
        <Box justifyContent={"center"} display={"flex"} marginTop={1}>
          <Typography
            fontSize={FontSizes.Accent}
            letterSpacing={8}
            fontWeight={"bold"}
          >
            {t("professional_it_services")}
          </Typography>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        //justifyContent={"center"}
        alignItems={"flex-end"}
        height={largeIcon}
        marginTop={10}
      >
        <Box flexGrow={1} borderColor={Colors.Text} borderBottom={1}></Box>
        {tabs.map((t) => (
          <ExpandableIconButton
            selectedTab={selectedTab}
            tab={t}
            setTab={setSelectedTab}
            navigate={navigate}
            key={t.name}
          />
        ))}
        <Box flexGrow={1} borderColor={Colors.Text} borderBottom={1}></Box>
      </Box>

      <Typography
        textAlign={"center"}
        fontSize={FontSizes.Heading}
        margin={1}
        color={Colors.Accent}
      >
        {selectedTab.name}
      </Typography>
      {serviceContentSwitch(selectedTab.hash)}
    </Layout>
  );
}
function ExpandableIconButton({
  selectedTab,
  tab,
  setTab,
  navigate,
}: {
  selectedTab: Tab;
  tab: Tab;
  setTab: (v: Tab) => void;
  navigate: NavigateFunction;
}) {
  const isSelected = tab.hash === selectedTab.hash;
  return (
    <Box
      borderColor={Colors.Text}
      border={isSelected ? 1 : 0}
      borderBottom={isSelected ? 0 : 1}
      borderRadius={"100px 100px 0 0"}
      padding={1}
    >
      <IconButton
        onClick={() => {
          navigate("#" + tab.hash);
          setTab(tab);
        }}
      >
        <tab.icon
          sx={{
            color: Colors.Text,
            fontSize: isSelected ? largeIcon : smallIcon,
            transition: "all .2s linear",
          }}
        />
      </IconButton>
    </Box>
  );
}
