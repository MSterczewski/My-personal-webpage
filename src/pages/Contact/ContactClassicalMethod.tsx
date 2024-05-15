import { Box, Link, Typography } from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Colors } from "../../resources/Colors";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactClassicalMethod() {
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
          w tradycyjny sposób:
        </Typography>
        <BoxWithIcon>
          <EmailIcon sx={{ color: Colors.Text }} />
          <Link
            href={`mailto:MSterczewski.IT@gmail.com`}
            color="inherit"
            underline="hover"
          >
            <Typography>MSterczewski.IT@gmail.com</Typography>
          </Link>
        </BoxWithIcon>
        <BoxWithIcon>
          <LinkedInIcon sx={{ color: Colors.Text }} />
          <Link
            href="https://www.linkedin.com/in/mateusz-sterczewski-730485200/"
            underline="hover"
            color="inherit"
            target="_blank"
          >
            <Typography>Mateusz Sterczewski</Typography>
          </Link>
        </BoxWithIcon>
        <BoxWithIcon>
          <LocalPhoneIcon sx={{ color: Colors.Text }} />
          <Link href={`tel:+48781019435`} color="inherit" underline="hover">
            <Typography>+48 781 019 435</Typography>
          </Link>
        </BoxWithIcon>
        <BoxWithIcon>
          <LocationOnIcon sx={{ color: Colors.Text }} />
          <Typography>Warszawa + online</Typography>
        </BoxWithIcon>
      </Box>
    </Box>
  );
  function BoxWithIcon({ children }: { children: React.ReactNode }) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {children}
      </Box>
    );
  }
}
