import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, ThemeProvider } from "@mui/material";
import { AppRoutes } from "../../../resources/AppRoutes";
import { Colors } from "../../../resources/Colors";
import { useLocation } from "react-router-dom";
import GetTheme from "./GetTheme";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const theme = GetTheme();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: Colors.Background,
        }}
      >
        <Container sx={{ width: "100%", margin: 0 }} maxWidth={false}>
          <Toolbar
            sx={{
              width: "100%",
              height: 64,
              display: "flex",
              flexDirection: "row",
              "@media (min-width: 0px)": { paddingRight: 0, paddingLeft: 0 },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href={AppRoutes.Home}
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MSterczewski
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href={AppRoutes.Home}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: Colors.Accent,
                textDecoration: "none",
              }}
            >
              | {t("it_services")}
            </Typography>
            {/* <MenuButton text="Moje projekty" url={AppRoutes.MyProjects} /> */}
            {/* <MenuButton text="O mnie" url={AppRoutes.AboutMe} /> */}
            <MenuButton text={t("my_services")} url={AppRoutes.MyServices} />
            <MenuButton text={t("contact")} url={AppRoutes.Contact} />
            <Box sx={{ flexGrow: 1, display: { xs: "flex" } }} />
            <Box justifySelf={"flex-end"} marginRight={7}>
              <LanguageSelector />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </ThemeProvider>
  );

  function MenuButton({ text, url }: { text: string; url: string }) {
    return (
      <Link
        sx={{
          color: Colors.Text,
          textTransform: "none",
          marginLeft: "10px",
          marginRight: "10px",
          textDecorationColor: Colors.Text,
        }}
        underline={location.pathname === url ? "always" : "hover"}
        href={url}
        display={{ xs: "none", sm: "flex" }}
      >
        {text}
      </Link>
    );
  }
}
