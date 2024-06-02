import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import axios from "axios";
import { Endpoints } from "../../resources/Endpoints";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../resources/AppRoutes";

export default function ContactForm() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    setIsSending(true);
    axios
      .post(process.env.REACT_APP_SERVER_URL + Endpoints.CreateMessage, {
        title,
        email,
        body,
      })
      .then(() => navigate(AppRoutes.ContactThankYou));
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Box sx={{}}>
        <Typography variant="h6" color={Colors.Accent} align="center">
          za pomocą formularza
        </Typography>
      </Box> */}
      <Box
        marginLeft="5%"
        marginRight="5%"
        marginTop={"10px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography>
          Opisz w czym mogę Ci pomóc, a skontaktuję się z Tobą w przeciągu kilku
          dni.
        </Typography>
        <TextField
          id="title"
          label="Temat"
          variant="outlined"
          margin="normal"
          sx={{ width: "70%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="email"
          label="Twój email"
          variant="outlined"
          margin="normal"
          autoComplete="email"
          sx={{ width: "70%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="body"
          label="Treść wiadomości"
          variant="outlined"
          multiline
          rows={10}
          margin="normal"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button
          variant={"contained"}
          sx={{ width: "40%", alignSelf: "center" }}
          onClick={handleSubmit}
          disabled={isSending}
        >
          Wyślij
        </Button>
        {isSending && <CircularProgress sx={{ alignSelf: "center" }} />}
      </Box>
    </Box>
  );
}
