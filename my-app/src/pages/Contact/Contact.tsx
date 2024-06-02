import { Box, Grid } from "@mui/material";
import Layout from "../shared/layout/Layout";
import ContactClassicalMethod from "./ContactClassicalMethod";
import ContactForm from "./ContactForm";
import PageHeader from "../shared/PageHeader";

export default function Contact() {
  return (
    <Layout>
      <Box>
        <PageHeader text={"Zapraszam do kontaktu"} />
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
