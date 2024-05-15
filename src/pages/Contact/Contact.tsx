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
      <Box marginTop="5%">
        <Typography align="center" variant="h5" color={Colors.Accent}>
          Zapraszam do kontaktu
        </Typography>
        <Grid container>
          <Grid item xs={5.8}>
            <ContactForm />
          </Grid>
          <Grid item xs={0.4}>
            <Box
              sx={{
                height: "100%",
                marginTop: "50%",
              }}
            >
              <Typography fontStyle="italic">Lub</Typography>
            </Box>
          </Grid>
          <Grid item xs={5.8}>
            <ContactClassicalMethod />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
