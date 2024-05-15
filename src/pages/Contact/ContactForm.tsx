import { Box, Link, Typography } from "@mui/material";

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
        fontSize: 32,
        display: "flex",
      }}
    >
      <Box width="40%"></Box>
      <Box sx={{}}>
        <Typography variant="h6" color={Colors.Accent}>
          za pomocą formularza
        </Typography>
        <Typography>W budowie</Typography>
      </Box>
    </Box>
  );
}
