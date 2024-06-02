import { Typography } from "@mui/material";
import { Colors } from "../../resources/Colors";

export default function PageHeader({ text }: { text: string }) {
  return (
    <Typography
      align="center"
      variant="h5"
      color={Colors.Accent}
      marginTop={"15px"}
      marginBottom={"10px"}
      fontWeight={"bold"}
    >
      {text}
    </Typography>
  );
}
