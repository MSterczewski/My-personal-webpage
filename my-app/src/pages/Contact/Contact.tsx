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
          <Grid item sm={6} md={4} lg={3} xs={12} order={{ xs: 2, sm: 1 }}>
            <ContactClassicalMethod />
          </Grid>
          <Grid item sm={6} md={8} lg={9} xs={12} order={{ xs: 1, sm: 2 }}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
