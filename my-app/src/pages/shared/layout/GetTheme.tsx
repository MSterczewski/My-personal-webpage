import { createTheme } from "@mui/material";
import { Colors } from "../../../resources/Colors";

export default function GetTheme() {
  return createTheme({
    palette: {
      primary: {
        light: Colors.Background,
        main: Colors.Accent,
        dark: Colors.Text,
        contrastText: Colors.Text,
      },
      // secondary: {
      //   light: Colors.Text,
      //   main: Colors.Accent,
      //   dark: Colors.Text,
      //   contrastText: Colors.Text,
      // },
      text: { primary: Colors.Text },
      background: { default: Colors.Text },
      contrastThreshold: 100,
      action: {
        disabled: Colors.Text,
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: Colors.Text,
              color: Colors.Text,
            },
            "& .MuiInputLabel-outlined": {
              borderColor: Colors.Text,
              color: Colors.Text,
            },
          },
        },
      },
    },
  });
}
