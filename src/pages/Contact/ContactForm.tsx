import { Box, Button, Link, TextField, Typography } from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Colors } from "../../resources/Colors";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactForm() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{}}>
        <Typography variant="h6" color={Colors.Accent} align="center">
          za pomocą formularza
        </Typography>
      </Box>
      <Box
        marginLeft={"10%"}
        marginRight={"10%"}
        marginTop={"10px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography fontStyle={"italic"} fontWeight={"light"}>
          Opisz w czym mogę Ci pomóc, a skontaktuję się z Tobą w przeciągu kilku
          dni.
        </Typography>
        <TextField
          id="outlined-basic"
          label="Temat"
          variant="outlined"
          margin="normal"
          sx={{ width: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          autoComplete="email"
          sx={{ width: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Treść wiadomości"
          variant="outlined"
          multiline
          rows={10}
          margin="normal"
        />
        <Typography fontStyle={"italic"} fontWeight={"light"}>
          Niestety formularz jest w budowie, zachęcam do kontaktu w tradycyjny
          sposób.
        </Typography>
        <Button
          variant={"contained"}
          sx={{ width: "40%", alignSelf: "center" }}
        >
          Wyślij
        </Button>
      </Box>
    </Box>
  );
}
