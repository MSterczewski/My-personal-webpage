import { Box, Grid, Link, Typography } from "@mui/material";
import Layout from "../shared/layout/Layout";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Colors } from "../../resources/Colors";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactClassicalMethod from "./ContactClassicalMethod";
import Divider from "@mui/material/Divider";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Layout>
      <Box>
        <Typography
          align="center"
          variant="h4"
          color={Colors.Accent}
          marginTop={"3%"}
          marginBottom={"3%"}
        >
          Zapraszam do kontaktu
        </Typography>
        <Grid container>
          <Grid item md={7} xs={12}>
            <ContactForm />
          </Grid>
          <Grid
            item
            md={0.4}
            xs={12}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box
              sx={{
                marginTop: "20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography fontStyle="italic" align="center">
                Lub
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4.6} xs={12}>
            <ContactClassicalMethod />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
