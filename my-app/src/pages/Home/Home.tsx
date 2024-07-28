import { Box, Button, Typography } from "@mui/material";
import Layout from "../shared/layout/Layout";
import { Colors } from "../../resources/Colors";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../resources/AppRoutes";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box
        marginLeft={2}
        marginRight={2}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
      >
        <Typography
          fontSize={40}
          //marginTop={8}
          fontWeight={"bold"}
          color={Colors.Accent}
          textAlign={"center"}
          //marginBottom={6}
          marginTop={10}
          marginBottom={8}
        >
          Usługi informatyczne
        </Typography>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
          marginBottom={10}
        >
          <SingleService text={"Utrzymanie"} />
          <SingleService text={"Projektowanie"} />
          <SingleService text={"Consulting"} />
          <SingleService text={"Tworzenie"} />
          <SingleService text={"Wysoka jakość"} />
          <SingleService text={"Czysty kod"} />
        </Box>

        {/* <Box display={"flex"} justifyContent={"space-around"} marginBottom={8}>
          <SingleService text={"Utrzymanie"} />
          <SingleService text={"Projektowanie"} />
          <SingleService text={"Consulting"} />
          <SingleService text={"Tworzenie"} />
        </Box>
        <Box display={"flex"} justifyContent={"space-around"} marginBottom={8}>
          <SingleService text={"Wysoka jakość"} />
          <SingleService text={"Czysty kod"} />
        </Box> */}

        <Button
          variant={"contained"}
          sx={{ width: "30%", alignSelf: "center" }}
          onClick={() => navigate(AppRoutes.Contact)}
        >
          Skontakuj się ze mną
        </Button>
      </Box>
    </Layout>
  );

  // function SingleService({ text }: { text: string }) {
  //   return (
  //     <Typography fontWeight={"bold"} fontSize={18}>
  //       {text}
  //     </Typography>
  //   );
  // }
  function SingleService({ text }: { text: string }) {
    return (
      <Typography fontWeight={"bold"} fontSize={25}>
        {text}
      </Typography>
    );
  }
}
