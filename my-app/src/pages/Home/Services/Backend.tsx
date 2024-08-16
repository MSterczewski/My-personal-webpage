import { Box, Typography } from "@mui/material";
import { ITechnologiesList } from "../Shared/TechnologiesList";
import ServiceLayout from "../Shared/ServiceLayout";

export default function Backend() {
  const technologies: ITechnologiesList = {
    technologyGroups: [
      {
        groupName: "Serwer",
        technologies: [
          { name: "C#", value: 5 },
          { name: "PHP", value: 2 },
          { name: "Rust", value: 1 },
          { name: "Java", value: 1 },
        ],
      },
      {
        groupName: "Bazy danych",
        technologies: [
          { name: "SQL", value: 5 },
          { name: "no-SQL", value: 4 },
          { name: "Optymalizacja", value: 4 },
        ],
      },
      {
        groupName: "Bezpieczeństwo",
        technologies: [
          { name: "Ochrona danych osobowych", value: 4 },
          { name: "Kryptografia", value: 3 },
        ],
      },
    ],
  };

  return (
    <ServiceLayout technologies={technologies}>
      <Box width={"100%"}>
        <Typography>
          Backend to wszystko co dzieje się "pod maską" strony internetowej.
          Użytkownik bezpośrednio nie widzi efektów pracy serwera, ale jest on
          kluczowy do poprawnego działania strony.
        </Typography>
        <Typography fontWeight={"bold"}>
          <br /> Z czego zazwyczaj składa się backend?
        </Typography>
        <Typography>
          W zależności od potrzeb produktu składa się z różnej liczby
          komponentów, a każdy z nich ma inną wagę. Typowo backend składa się z
          serwera (np. PHP, C#, Java, Node.js), bazy danych (np. SQL) oraz usług
          chmurowych (np. AWS, Azure). Kluczowe jest również, aby dane osobowe
          były odpowiednio chronione, a także zastosowana była kryptografia tam,
          gdzie jest to wskazane.
        </Typography>
      </Box>
    </ServiceLayout>
  );
}
