import { Box, Divider, Rating, Stack, Typography } from "@mui/material";
import { Colors } from "../../../resources/Colors";

export interface ITechnologiesList {
  technologyGroups: {
    groupName: string;
    technologies: { name: string; value: number }[];
  }[];
}

export default function TechnologiesList({
  technologies,
}: {
  technologies: ITechnologiesList;
}) {
  return (
    <Box>
      <Typography variant="h6" color={Colors.Accent}>
        Powiązane technologie
      </Typography>
      <Stack gap={"5px"} marginRight={"15px"}>
        {technologies.technologyGroups.map((tg) => (
          <Box key={tg.groupName}>
            {technologies.technologyGroups.length > 1 && ( //Show only if more than 1 group
              <>
                <Typography>{tg.groupName}</Typography>
                <Divider color={Colors.Text} />
              </>
            )}
            <Stack>
              {tg.technologies.map((t) => (
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  key={t.name}
                >
                  <Typography fontWeight={"bold"}>{t.name}</Typography>
                  <Box alignSelf={"flex-end"} justifyContent={"flex-end"}>
                    <Rating
                      value={t.value}
                      precision={0.5}
                      readOnly
                      size="small"
                      sx={{ color: Colors.Accent }}
                    />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        ))}

        {/* {technologies.map((t) => (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            marginRight={"10px"}
          >
            <Typography fontWeight={"bold"}>{t.name}</Typography>
            <Box alignSelf={"flex-end"} justifyContent={"flex-end"}>
              <Rating
                value={t.value}
                precision={0.5}
                readOnly
                size="small"
                sx={{ color: Colors.Accent }}
              />
            </Box>
          </Box>
        ))} */}
      </Stack>
    </Box>
  );
}
