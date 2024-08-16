import { ListItemIcon, MenuItem, Select } from "@mui/material";
import { PL, US } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  function handleLanguageChange(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <Select
      sx={{
        width: 70,
      }}
      value={i18n.language}
      onChange={(e) => handleLanguageChange(e.target.value)}
    >
      <MenuItem value={"pl"}>
        <ListItemIcon>
          <PL width={20} />
        </ListItemIcon>
      </MenuItem>
      <MenuItem value="en">
        <ListItemIcon>
          <US width={20} />
        </ListItemIcon>
      </MenuItem>
    </Select>
  );
}
